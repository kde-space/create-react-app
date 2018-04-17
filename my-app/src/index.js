import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';

const initialState = {
  tasks: []
};

// Reducerの定義
function addReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      };
    default:
      return state;
  }
}

function resetReducer(state = initialState, action) {
  switch(action.type) {
    case 'RESET_TASK':
      return {
        ...state,
        tasks: []
      };
    default:
      return state;
  }
}

const reducers = combineReducers({
  add: addReducer,
  reset: resetReducer
});

// actionCreatorの定義
const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
});
const resetTask = () => ({
  type: 'RESET_TASK'
})


// storeの作成
const store = createStore(reducers);

store.dispatch(addTask('storeを学ぶ'));
console.log(store.getState().add);

store.dispatch(resetTask());
console.log(store.getState());

store.dispatch(addTask('storeを学ぶ123'));
console.log(store.getState());

store.dispatch(resetTask());
console.log(store.getState());



// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
