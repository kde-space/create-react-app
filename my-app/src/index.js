import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import TodoApp from './containers/TodoApp';
import createStore from './stores/index';
// import { storeTodoApp } from './stores/TodoApp';

// historyインスタンスの生成
const history = createBrowserHistory();

// Storeの生成
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <TodoApp />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('hoge')
);
