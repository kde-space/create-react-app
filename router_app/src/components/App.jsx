import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';
import Cart from './Cart';
import Shop from './Shop';
import No404 from './No404';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemMaster: [],
      cart: [
      {
        id: 1,
        name: '元気になる薬',
        sescription: '飲んだら24時間元気が続く薬です',
        price: 1000,
        count: 100
      },
      {
        id: 2,
        name: '落ち着く薬',
        sescription: '飲んだら24時間沈着冷静になれる薬です',
        price: 800,
        count: 50
      }],
      shop: []
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Header cartData={this.state.cart}/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/cart' component={Cart} />
            <Route path='/shop' component={Shop} />
            <Route path='/404' component={No404}></Route>
            <Redirect to='/404' />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;