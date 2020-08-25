import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Item, itemsReducer } from './items';

export interface State {
  // Customer extends User
  // Vendor extends User

  // Item
  items: Item[];

  // Shopping Cart
}

export const reducers: ActionReducerMap<State> = {
  items: itemsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
