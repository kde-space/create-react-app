import { combineReducers } from 'redux';
import todos from './todo';
import visibilityFilter from './visibilityFilter';

export default function (state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
}
