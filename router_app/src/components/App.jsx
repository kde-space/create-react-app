// package
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
// component
import Header from './Header';
import Home from './Home';
import About from './About';
import Cart from './Cart';
import Shop from './Shop';
import No404 from './No404';

// module
import getItemValueById from '../util/getItemValueById';
import getItemIndexById from '../util/getItemIndexById';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemMaster: [
        {
          id: 1,
          name: '元気になる薬',
          description: '飲んだら24時間元気が続く薬です',
          price: 1000,
          count: 10
        },
        {
          id: 2,
          name: '落ち着く薬',
          description: '飲んだら24時間沈着冷静になれる薬です',
          price: 800,
          count: 10
        }
      ],
      cart: [
      {
        id: 1,
        name: '元気になる薬',
        description: '飲んだら24時間元気が続く薬です',
        price: 1000,
        count: 1
      },
      {
        id: 2,
        name: '落ち着く薬',
        description: '飲んだら24時間沈着冷静になれる薬です',
        price: 800,
        count: 2
      }],
      shop: []
    };

    // bind
    this.changeCartItem = this.changeCartItem.bind(this);
  }

  /**
   * カート内の商品を変更
   * @param {*} type
   * @param {*} id
   */
  changeCartItem(type, id) {
    const newCarts = [...this.state.cart];
    const targetItem = getItemValueById(newCarts, id);
    if (type === 'add') {
      targetItem.count += 1;
    } else if (type === 'subtract') {
      targetItem.count -= 1;
    } else if (type === 'remove') {
      newCarts.splice(getItemIndexById(newCarts, id), 1);
    }
    this.setState({
      cart: [
        ...newCarts
      ]
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Header cartData={this.state.cart}/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route
              path='/cart'
              render={(props) =>
                <Cart
                  masterData={this.state.itemMaster}
                  cartData={this.state.cart}
                  changeCartItem={this.changeCartItem}
                />
              }
            />
            <Route
              path='/shop'
              render={(props) =>
                <Shop
                  masterData={this.state.itemMaster}
                  cartData={this.state.cart}
                />
              }
            />
            <Route path='/404' component={No404}></Route>
            <Redirect to='/404' />
          </Switch>
        </div>
      </Router>
    );
  }
}



export default App;