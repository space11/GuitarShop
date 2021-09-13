import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShopInitialState } from './reducer';

export const getShopState = createFeatureSelector<ShopInitialState>('shop');

export const getCart = createSelector(
  getShopState,
  (state) => {
    return state.cart;
  });

export const getItems = createSelector(
  getShopState,
  (state) => state.items
);