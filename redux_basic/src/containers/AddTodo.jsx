import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.textBox = null;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.textBox.value.trim()) {
      this.props.onAddTodo(this.textBox.value);
      this.textBox.value = '';
    }
  }

  render() {
    return (
      <div>
        <input type="text" ref={el => this.textBox = el}/>
        <button onClick={this.handleClick}>add</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (text) => dispatch(addTodo(text))
  }
};

export default connect(null, mapDispatchToProps)(AddTodo);