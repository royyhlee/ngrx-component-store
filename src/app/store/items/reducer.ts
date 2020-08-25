import { createReducer, on } from '@ngrx/store';
import { addItem, removeItem } from './actions';

export const itemsReducer = createReducer(
  [],

  on(addItem, (state, { item }) => {
    return [...state, item];
  }),

  on(removeItem, (state, { itemId }) => {
    return state.filter(item => item.id !== itemId);
  })
);

