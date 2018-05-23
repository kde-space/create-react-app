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
  render() {
    return (
      <Router>
        <div>
          <Header />
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