import React from 'react';
import * as actions from '../actions/tasks';

export default function TodoApp({ store }) {
  const state = store.getState();
  return (
    <div>
      <input type="text" value={state.task} onChange={(e) => store.dispatch(actions.inputTask(e.target.value))} />
      <input
        type="button"
        value="add"
        onClick={() => {
          store.dispatch(actions.addTask(state.task));
          store.dispatch(actions.clearInput());
        }}
      />
      <input type="button" value="clear" onClick={() => store.dispatch(actions.clearAll())} />
      <ul>
        {
          state.tasks.map((item, index) => <li key={index}>{item}</li>)
        }
      </ul>
    </div>
  );
}