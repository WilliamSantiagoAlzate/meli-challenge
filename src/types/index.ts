export type searchItemPayload = {
  query: string
}

export type getItemByIdPayload = {
  id: string
}

export type searchItemAction = {
  type: string
  payload: searchItemPayload
}

export type getItemByIdAction = {
  type: string
  payload: getItemByIdPayload
}

export type itemsState = {
  items: any[]
  loadingItems: boolean
  item: any
  loadingItem: boolean
}

export type params = {
  id: string
}

export enum spinnerColors {
  black = 'black'
}
