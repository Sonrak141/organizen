import { URL_API } from '../../constants/databas';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CONFIRM_CART = 'CONFIRM_CART';

export const addItem = (item) => ({
  type: ADD_ITEM,
  item:item,
});

export const removeItem = (itemID) => ({
  type: REMOVE_ITEM,
  itemID,
});