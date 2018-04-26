import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import TodoApp from './containers/TodoApp';
import createStore from './stores/index';
import Error from './components/Error';

// historyインスタンスの生成
const history = createBrowserHistory();
// Storeの生成
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        {/* ルーティングさせる */}
        <Route exact path="/" component={TodoApp} />
        <Route exact path="/error" component={Error} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
