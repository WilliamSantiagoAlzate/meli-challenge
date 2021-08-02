import { all } from 'redux-saga/effects';

import items from './sagas/items';

export default function * rootSaga() {
  yield all([items()]);
}