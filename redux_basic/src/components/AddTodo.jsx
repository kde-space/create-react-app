import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.refInput = null;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const value = this.refInput.value;
    if (value.trim()) {
      this.props.addTodo(value);
      this.refInput.value = '';
    }
  }

  render() {
    return (
      <div>
        <input type="text" ref={el => this.refInput = el}/>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default AddTodo;