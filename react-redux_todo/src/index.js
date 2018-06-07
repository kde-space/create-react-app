import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import todoApp from './reducers';
// import App from './containers/App';

const store = createStore(todoApp);
console.log(store.getState());
const un = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: 'ADD_TODO',
  payload: {
    text: 'task1'
  }
});
store.dispatch({
  type: 'ADD_TODO',
  payload: {
    text: 'task2'
  }
});
store.dispatch({
  type: 'ADD_TODO',
  payload: {
    text: 'task3'
  }
});
store.dispatch({
  type: 'TOGGLE_TODO',
  payload: {
    index: 1
  }
});
store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  payload: {
    filter: 'SHOW_COMPLETED'
  }
});


render(
  <div>hoge</div>,
  document.getElementById('root')
);
