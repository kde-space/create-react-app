import { combineReducers } from 'redux';
import header from './header';
import message from './message';

export default combineReducers({
  header,
  message
});