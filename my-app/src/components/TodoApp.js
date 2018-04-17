import React from 'react';
import * as actions from '../actions/tasks';

export default function TodoApp({ store }) {
  const { task, tasks } = store.getState();
  return (
    <div>
      <input type="text" onChange={(e) => store.dispatch(actions.inputTask(e.target.value))} value={task} />
      <input
        type="button"
        value="add"
        onClick={() => {
          store.dispatch(actions.addTask(task));
          store.dispatch(actions.clearInputTask());
        }}
      />
      <input type="button" value="all clear" onClick={() => store.dispatch(actions.allClear())} />
      <ul>
        {
          tasks.map((item, index) => <li key={index}>{item}</li>)
        }
      </ul>
    </div>
  );
}