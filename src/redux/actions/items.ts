import { 
  START_SEARCH_ITEM, 
  START_GET_ITEM_BY_ID 
} from '../consts';

import {
  searchItemPayload,
  getItemByIdPayload
} from '../../types';

export const searchItem = (payload: searchItemPayload) => ({
  type: START_SEARCH_ITEM,
  payload
});

export const getItemById = (payload: getItemByIdPayload) => ({
  type: START_GET_ITEM_BY_ID,
  payload
});