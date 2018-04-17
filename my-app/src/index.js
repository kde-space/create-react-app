import React from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './components/TodoApp';
import { createStore } from 'redux';
import taskReducers from './reducers/task';

const store = createStore(taskReducers);

function renderApp(store) {
  ReactDOM.render(
    <TodoApp store={store} />,
    document.getElementById('root')
  );
}

store.subscribe(() => renderApp(store));

renderApp(store);