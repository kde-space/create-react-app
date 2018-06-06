import React, { Component } from 'react';

const Todo = (props) => (
  <li
    onClick={props.toggleTodo}
    style={{
      textDecoration: props.completed ? 'line-through' : 'none',
      cursor: props.completed ? 'default' : 'pointer'
    }}
  >
    {props.text}
  </li>
);

export default Todo;