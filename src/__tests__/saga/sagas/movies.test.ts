import { put, call } from 'redux-saga/effects';
import {
  START_SEARCH_ITEM,
  SUCCESS_SEARCH_ITEM,
  ERROR_SEARCH_ITEM,
  START_GET_ITEM_BY_ID,
  SUCCESS_GET_ITEM_BY_ID,
  ERROR_GET_ITEM_BY_ID
} from '../../../redux/consts';
import {
  searchItemAction,
  getItemByIdAction
} from '../../../types';
import { apiCall } from '../../../saga/apiCall';
import {
  searchItemRequest,
  getItemByIdRequest 
} from '../../../saga/sagas/items';

const apiUrl: string = 'http://localhost:4000';

describe('Search items request', () => {
  const query: string = 'item';
  const action: searchItemAction = { type: START_SEARCH_ITEM, payload: { query }};
  
  it('Success response', () => {
    const searchItems = searchItemRequest(action);
    const url: string = `${apiUrl}/items?q=${query}`;
    
    expect(searchItems.next().value).toEqual(call(apiCall, url, 'GET'));
    expect(searchItems.next().value).toEqual(put({ type: SUCCESS_SEARCH_ITEM }))
  })
  
  it('Error response', () => {
    const searchItems = searchItemRequest(action);
    const error = 'Error';
    searchItems.next();

    expect(searchItems.throw(error).value).toEqual(put({ type: ERROR_SEARCH_ITEM, error }));
  })
})

describe('Get item by id request', () => {
  const id: number = 1;
  const action: getItemByIdAction = { type: START_GET_ITEM_BY_ID, payload: { id }};
  
  it('Success response', () => {
    const getItemById = getItemByIdRequest(action);
    const url: string = `${apiUrl}/items/${id}`;
    
    expect(getItemById.next().value).toEqual(call(apiCall, url, 'GET'));
    expect(getItemById.next().value).toEqual(put({ type: SUCCESS_GET_ITEM_BY_ID }))
  })
  
  it('Error response', () => {
    const getItemById = getItemByIdRequest(action);
    const error = 'Error';
    getItemById.next();

    expect(getItemById.throw(error).value).toEqual(put({ type: ERROR_GET_ITEM_BY_ID, error }));
  })
})
