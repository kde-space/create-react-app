import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const initialState = {
  task: '',
  tasks: []
};

const taskReducers = (state = initialState, action) => {
  switch(action.type) {
    case 'INPUT_TASK':
      return {
        ...state,
        task: action.payload.task
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      };
    case 'CLEAR_INPUT':
      return {
        ...state,
        task: ''
      };
    case 'CLEAR_ALL':
      return {
        task: '',
        tasks: []
      };
    default:
      return state;
  }
}

const inputTask = (task) => ({
  type: 'INPUT_TASK',
  payload: {
    task
  }
});

const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
});

const clearInput = () => ({
  type: 'CLEAR_INPUT'
});

const clearAll = () => ({
  type: 'CLEAR_ALL'
});

const store = createStore(taskReducers);

function TodoApp({ store }) {
  const state = store.getState();
  return (
    <div>
      <input type="text" value={state.task} onChange={(e) => store.dispatch(inputTask(e.target.value))} />
      <input
        type="button"
        value="add"
        onClick={() => {
          store.dispatch(addTask(state.task));
          store.dispatch(clearInput());
        }}
      />
      <input type="button" value="clear" onClick={() => store.dispatch(clearAll())} />
      <ul>
        {
          state.tasks.map((item, index) => <li key={index}>{item}</li>)
        }
      </ul>
    </div>
  );
}

const renderTodoApp = () => {
  console.log(store.getState());

  ReactDOM.render(
    <TodoApp store={store} />,
    document.getElementById('root')
  );
};

store.subscribe(renderTodoApp);
renderTodoApp();