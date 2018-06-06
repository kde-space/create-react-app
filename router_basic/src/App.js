import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PageNation from './components/PageNation';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'firstText'
    };

    this.changeText = this.changeText.bind(this);
  }

  changeText(text) {
    this.setState({
      text
    });
  }

  render() {
    console.log(this.state);
    return (
      <Router>
        <div>
          <div
            className="container"
            style={{backgroundColor: '#eee'}}
          >
            <p>{this.state.text}</p>
          </div>
          <Route path="/" render={props => <PageNation changeText={this.changeText} {...props} />} />
        </div>
      </Router>
    );
  }
}