import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';

// actionCreator
const increment = () => ({
  type: 'INCREMENT'
});
const decrement = () => ({
  type: 'DECREMENT'
});

const initialState = {
  num: 0
};

// reducer
const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        num: state.num + 1
      };
    case 'DECREMENT':
      return {
        num: state.num - 1
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

function Counter({ store }) {
  const { num } = store.getState();
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => store.dispatch(increment())}>+1</button>
      <button onClick={() => store.dispatch(decrement())}>-1</button>
    </div>
  )
}

store.subscribe(build);

function build() {
  ReactDOM.render(
    <Counter store={store} />,
    document.getElementById('root')
  );
}

build();
