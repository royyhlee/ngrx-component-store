import { createAction, props } from '@ngrx/store';
import { Item } from './state';

export const addItem = createAction(
  '[Item] Add Item',
  props<{ item: Item; }>()
);

export const removeItem = createAction(
  '[Item] Add Item',
  props<{ itemId: string; }>()
);
