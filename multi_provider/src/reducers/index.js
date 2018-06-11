import { combineReducers } from 'redux';
import header from './header';
import snackbar from './snackbar';

export default combineReducers({
  header,
  snackbar
});