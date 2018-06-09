import { combineReducers } from 'redux';
import sideMenu from './sideMenu';
import snackbar from './snackbar';

export default combineReducers({
  sideMenu,
  snackbar
});