import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TodoApp from './containers/TodoApp';
import { storeTodoApp } from './stores/TodoApp';

ReactDOM.render(
  <Provider store={storeTodoApp}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
