import React from 'react';
import { inputTask, addTask, clearInputTask } from '../actions/tasks';

export default function TodoApp({ store }) {
  const { task, tasks } = store.getState();

  return (
    <div>
      <input type="text" onChange={(e) => store.dispatch(inputTask(e.target.value))} value={task} />
      <input
        type="button"
        value="add"
        onClick={() => {
          store.dispatch(addTask(task));
          store.dispatch(clearInputTask());
        }}
      />
      <ul>
        {
          tasks.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </div>
  );
}
