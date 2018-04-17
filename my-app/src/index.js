import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import tasksReducer from './reducers/task';
import TodoApp from './components/TodoApp';

// storeの作成
const store = createStore(tasksReducer);

// 描画させるための関数
function renderApp(store) {
  ReactDOM.render(
    <TodoApp store={store} />,
    document.getElementById('root')
  );
}

// viewを更新する関数
store.subscribe(() => renderApp(store));

renderApp(store);