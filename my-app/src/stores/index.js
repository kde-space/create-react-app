import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { taskReducers } from '../reducers/task';
import { createLogger } from 'redux-logger';

// 高頻度で発生するアクションをログに落とさないように例外として指定
const loggerSetting = {
  predicate: (getState, action) => action.type !== 'INPUT_TASK'
}
// 設定をもとにloggerミドルウェアを作成
const logger = createLogger(loggerSetting);

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
      routerMiddleware(history),
      logger
    )
  );
}
