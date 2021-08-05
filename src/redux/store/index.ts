import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { items } from '../reducers/items';
import rootSaga from '../../saga';

const sagaMiddleware = createSagaMiddleware();

export const storeFn = () => {
  return {
    ...createStore(items, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga)
  };
};
