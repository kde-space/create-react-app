import React from 'react';
import ReactDOM from 'react-dom';
import { taskReducers } from './reducers/task';
import { createStore } from 'redux';
import TodoApp from './components/TodoApp';

const store = createStore(taskReducers);

const renderTodoApp = () => {
  ReactDOM.render(
    <TodoApp store={store} />,
    document.getElementById('root')
  );
};

store.subscribe(renderTodoApp);
renderTodoApp();