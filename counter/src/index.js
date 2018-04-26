import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState({
      num: this.state.num + 1
    });
  }
  decrement() {
    this.setState({
      num: this.state.num - 1
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.num}</h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);
