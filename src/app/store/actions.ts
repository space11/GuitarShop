import { Guitar } from './../models/guitar.model';
import { createAction, props } from '@ngrx/store';

export const AddToCart = createAction('[Guitars] Add to cart', props<{ guitar: Guitar; }>());
export const RemoveFromCart = createAction('[Guitars] Remove from cart', props<{ guitar: Guitar; }>());
export const LoadItems = createAction('[Guitars] Load items from server');
export const LoadItemsSuccess = createAction('[Guitars] Load success', props<{ guitars: Guitar[]; }>());
export const LoadItemsFailure = createAction('[Guitars] Load failure', props<{ error: any; }>());


export const ShopActions = {
  AddToCart,
  RemoveFromCart,
  LoadItems,
  LoadItemsSuccess,
  LoadItemsFailure,
};