import { put, call, takeLatest } from 'redux-saga/effects';
import {
  START_SEARCH_ITEM,
  SUCCESS_SEARCH_ITEM,
  ERROR_SEARCH_ITEM,
  START_GET_ITEM_BY_ID,
  SUCCESS_GET_ITEM_BY_ID,
  ERROR_GET_ITEM_BY_ID
} from '../../redux/consts';
import {
  searchItemAction,
  getItemByIdAction
} from '../../types';
import { apiCall } from '../apiCall';

const apiUrl: string = 'http://localhost:4000';

export function * searchItemRequest({ payload }: searchItemAction): Generator<any, any, any> {
  const { query } = payload;
  const url: string = `${apiUrl}/items?q=${query}`;

  try {
    const result = yield call(apiCall, url, 'GET');
    yield put({ type: SUCCESS_SEARCH_ITEM, result });
  } catch(error) {
    yield put({ type: ERROR_SEARCH_ITEM, error });
  }
}

export function * getItemByIdRequest({ payload }: getItemByIdAction): Generator<any, any, any> {
  const { id } = payload;
  const url: string = `${apiUrl}/items/${id}`;

  try {
    const result = yield call(apiCall, url, 'GET');
    yield put({ type: SUCCESS_GET_ITEM_BY_ID, result });
  } catch(error) {
    yield put({ type: ERROR_GET_ITEM_BY_ID, error });
  }
}

// Create watchers
export default function * items() {
  yield takeLatest(START_SEARCH_ITEM, searchItemRequest);
  yield takeLatest(START_GET_ITEM_BY_ID, getItemByIdRequest);
}