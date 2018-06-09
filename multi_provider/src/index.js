import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import appReducer from './reducers';
import Contents from './containers/Contents';
import SideMenu from './components/SideMenu';
import Snackbar from './components/Snackbar';

const store = createStore(
  appReducer,
  applyMiddleware(logger)
);

render(
  <Provider store={store}>
    <SideMenu />
  </Provider>,
  document.getElementById('sideMenu')
);

render(
  <Provider store={store}>
    <Contents />
  </Provider>,
  document.getElementById('contents')
);


render(
  <Provider store={store}>
    <Snackbar />
  </Provider>,
  document.getElementById('snackbar')
);