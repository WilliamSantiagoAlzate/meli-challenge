export const item = {
  id: 1,
  title: 'Title',
  picture: 'Image',
  condition: 'New',
  free_shipping: true,
  price: {
    amount: 1000,
    currency: 'ARS'
  }
}

export const items = [item];

export const state = {
  items,
  loadingItems: false,
  item,
  loadingItem: false
}