import { Guitar } from './../models/guitar.model';
import { createReducer, on, } from '@ngrx/store';
import { ShopActions } from './actions';

export interface ShopInitialState {
  items: Guitar[],
  cart: Guitar[];
}

const initialState: ShopInitialState = {
  items: [],
  cart: []
};

const shopReducer = createReducer(
  initialState,
  on(ShopActions.LoadItemsSuccess, (state, action) => ({ ...state, items: action.guitars })),
  on(ShopActions.AddToCart, (state, action) => ({ ...state, cart: [...state.cart, action.guitar] })),
  on(ShopActions.RemoveFromCart, (state, action) => ({ ...state, cart: [...state.cart.filter((item: Guitar) => item.name !== action.guitar.name)] })),
);

export function reducer(state, action) {
  return shopReducer(state, action);
}