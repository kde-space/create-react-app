import React, { Component } from 'react';
import Todo from './Todo';

const TodoList = (props) => (
  <ul>
    {props.todos.map((todo, index) => (
      <Todo key={index} {...todo} toggleTodo={() => props.toggleTodo(index)} />
    ))}
  </ul>
  
);

export default TodoList;