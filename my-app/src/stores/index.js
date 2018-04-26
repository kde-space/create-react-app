import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { taskReducers } from '../reducers/task';

/**
 * ReducerとMiddlewareをセットしてStoreを生成する関数を提供
 */
export default function createStore(history) {
  return reduxCreateStore(
    // routerReducerを用いるためにReducerの合成を行う
    combineReducers({
      tasks: taskReducers,
      router: routerReducer
    }),
    // ルーティング用のMiddlewareを適用させる
    applyMiddleware(
      // react-router-reduxのRedux Middleware
      // このMiddlewareによりReduxのAction経由でルーティングが制御できるようになる
      routerMiddleware(history)
    )
  );
}
