import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import appReducer from './reducers';
import Contents from './components/Contents';
import Header from './components/Header';
import Message from './components/Message';

const store = createStore(
  appReducer,
  applyMiddleware(logger)
);

render(
  <Provider store={store}>
    <Header />
  </Provider>,
  document.getElementById('header')
);

render(
  <Provider store={store}>
    <Contents />
  </Provider>,
  document.getElementById('contents2')
);


render(
  <Provider store={store}>
    <Message />
  </Provider>,
  document.getElementById('message')
);