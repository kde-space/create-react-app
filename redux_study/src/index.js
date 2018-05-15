// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

import { createStore } from 'redux';

const initialState = {
  value: 0
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

function counterReducer(state = initialState, action) {
  switch(action.type) {
    case INCREMENT:
      return ({
        ...state,
        value: state.value + 1
      });
    case DECREMENT:
      return ({
        ...state,
        value: state.value - 1
      });
    default:
      return state;
  }
}

const elementValue = document.getElementById('value');
const btnIncrement = document.getElementById('increment');
const btnDecrement = document.getElementById('decrement');
const render = () => {
  if (elementValue === null) { return; }
  elementValue.textContent = store.getState().value;
}

const store = createStore(counterReducer);
store.subscribe(render);


if (btnIncrement !== null) {
  btnIncrement.addEventListener('click', () => store.dispatch(increment()));
}
if (btnDecrement !== null) {
  btnDecrement.addEventListener('click', () => store.dispatch(decrement()));
}




console.log(counterReducer(initialState, increment()));
console.log(counterReducer(initialState, decrement()));
