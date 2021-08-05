import {
  START_SEARCH_ITEM,
  SUCCESS_SEARCH_ITEM,
  ERROR_SEARCH_ITEM,
  START_GET_ITEM_BY_ID,
  SUCCESS_GET_ITEM_BY_ID,
  ERROR_GET_ITEM_BY_ID
} from '../../../redux/consts';
import { items, initialState } from '../../../redux/reducers/items';
import { item, items as itemsData } from '../../../__mocks__/data';

//Do test of app reducer
describe('Items reducers', () => {
  test('Should returns the initial state', () => {
    expect(items(undefined, {})).toEqual(initialState);
  });

  test('Set loading items for search', () => {
    const payload = { query: 'Harry'};
    expect(
      items(initialState, { type: START_SEARCH_ITEM, payload })
    ).toEqual({ 
      ...initialState,
      loadingItems: true,
    });
  });

  test('Set new items and remove loading items for search', () => {
    const result = { items: itemsData};
    expect(
      items(initialState, { type: SUCCESS_SEARCH_ITEM, result})
    ).toEqual({
      ...initialState,
      loadingItems: false,
      items: itemsData,
    });
  });

  test('Remove loading items for search', () => {
    expect(
      items(initialState, { type: ERROR_SEARCH_ITEM })
    ).toEqual({
      ...initialState,
      loadingItems: false
    });
  });

  test('Set loading item', () => {
    expect(
      items(initialState, { type: START_GET_ITEM_BY_ID })
    ).toEqual({ 
      ...initialState,
      loadingItem: true,
    });
  });

  test('Set new item and remove loading item', () => {
    const result = { item: item };
    expect(
      items(initialState, { type: SUCCESS_GET_ITEM_BY_ID, result})
    ).toEqual({
      ...initialState,
      loadingItem: false,
      item
    });
  });

  test('Remove loading item', () => {
    expect(
      items(initialState, { type: ERROR_GET_ITEM_BY_ID })
    ).toEqual({
      ...initialState,
      loadingItem: false
    });
  });
});