import React from 'react';

export default function TodoApp({ task, tasks, inputTask, addTask, clearInput, clearAll, redirectToError }) {
  return (
    <div>
      <input type="text" value={task} onChange={(e) => inputTask(e.target.value)} />
      <input
        type="button"
        value="add"
        onClick={() => {
          addTask(task);
          clearInput();
        }}
      />
      <input
        type="button"
        value="clearAll"
        onClick={clearAll}
      />
      <ul>
        {
          tasks.map((item, index) => <li key={index}>{item}</li>)
        }
      </ul>
      <button onClick={redirectToError}>エラーページへ</button>
    </div>
  );
}