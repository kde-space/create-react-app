import { createStore } from 'redux';
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './actions';
import todoReducers from './reducers';

// storeの作成
const store = createStore(todoReducers);

const unSubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addTodo('aaa'));
store.dispatch(addTodo('bbb'));
store.dispatch(addTodo('ccc'));
store.dispatch(addTodo('ddd'));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

unSubscribe();

store.dispatch(addTodo('eee'));

