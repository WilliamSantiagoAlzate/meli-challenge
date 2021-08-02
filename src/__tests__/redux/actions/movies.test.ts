import configureStore from 'redux-mock-store';
import {
  START_SEARCH_ITEM, 
  START_GET_ITEM_BY_ID 
} from '../../../redux/consts';
import {
  searchItemPayload,
  getItemByIdPayload
} from '../../../types';
import {
  searchItem, 
  getItemById 
} from '../../../redux/actions/items';

describe('Items actions', () => {
  const mockStore = configureStore();

  test('Should run the search items action', () => {
    const store = mockStore({ });
    const payload: searchItemPayload = { query: 'item' };
    store.dispatch(searchItem(payload));

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe(START_SEARCH_ITEM);
    expect(actions[0].payload).toEqual(payload);
  });
  test('Should run the get item by id action', () => {
    const store = mockStore({ });
    const payload: getItemByIdPayload = { id: 1 }
    store.dispatch(getItemById(payload));

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe(START_GET_ITEM_BY_ID);
    expect(actions[0].payload).toEqual(payload);
  });
})