import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChangeModal from './ChangeModal';
import Modal from './Modal';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <ul>
          {this.props.todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <hr/>
        <ChangeModal />
        <hr/>
        <Modal />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);