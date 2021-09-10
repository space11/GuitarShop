import { Guitar } from './../models/guitar.model';
import { createReducer, on, } from '@ngrx/store';
import * as ShopActions from './actions';

interface InitialState {
  items: Guitar[],
  cart: Guitar[];
}

export const initialState: InitialState = {
  items: [],
  cart: []
};

const shopReducer = createReducer(
  initialState,
  on(ShopActions.LoadItemsSuccess, (state, action) => ({ ...state, items: action.payload })),
  on(ShopActions.AddToCart, (state, action) => ({ ...state, cart: [...state.cart, action.payload] })),
  on(ShopActions.RemoveFromCart, (state, action) => ({ ...state, cart: [...state.cart.filter((item: Guitar) => item.name !== action.payload.name)] })),
);

export function reducer(state, action) {
  return shopReducer(state, action);
}