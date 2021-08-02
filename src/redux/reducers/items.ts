import {
  START_SEARCH_ITEM,
  SUCCESS_SEARCH_ITEM,
  ERROR_SEARCH_ITEM,
  START_GET_ITEM_BY_ID,
  SUCCESS_GET_ITEM_BY_ID,
  ERROR_GET_ITEM_BY_ID
} from '../consts';

import { itemsState } from '../../types'

export const initialState = {
  items: [],
  loadingItems: false,
  item: {},
  loadingItem: false,
}

export const items = (state: itemsState = initialState, action: any) => {
	const { result } = action;

	switch (action.type) {
		case START_SEARCH_ITEM:
			return {
				...state,
				items: [],
        loadingItems: true,
				totalPages: 0,
			}
		case SUCCESS_SEARCH_ITEM:
			return {
        ...state,
				loadingItems: false,
				items: result,
			}
    case ERROR_SEARCH_ITEM:
			return {
				...state,
				loadingItems: false,
			}
		case START_GET_ITEM_BY_ID:
			return {
				...state,
				item: {},
        loadingItem: true,
			}
		case SUCCESS_GET_ITEM_BY_ID:
			return {
        ...state,
				loadingItem: false,
				item: result
			}
    case ERROR_GET_ITEM_BY_ID:
			return {
				...state,
				loadingItem: false,
			}
		default:
			return { ...state };
	}
}
