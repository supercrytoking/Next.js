import { createStore, applyMiddleware, Middleware, Store } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware, { Task } from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';

export interface SagaStore extends Store {
  sagaTask: Task;
}

import reducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware: Array<Middleware> = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  const loggerMiddleware = createLogger({
    level: 'info',
    collapsed: true,
  });
  middleware.push(loggerMiddleware);
}

const configureStore = (initialState: object) => {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
  );

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper<Store>(configureStore, {
  debug: true,
});
