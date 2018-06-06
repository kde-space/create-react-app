export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
};

export const addTodo = (text) => ({
  text,
  type: ADD_TODO
});

export const toggleTodo = (index) => ({
  index,
  type: TOGGLE_TODO
});

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  visibilityFilter: filter
});