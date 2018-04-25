import { taskReducers } from '../reducers/task';
import { createStore } from 'redux';

export const storeTodoApp = createStore(taskReducers);