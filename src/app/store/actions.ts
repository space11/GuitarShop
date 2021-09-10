import { Guitar } from './../models/guitar.model';
import { createAction, props } from '@ngrx/store';

export const AddToCart = createAction('[Guitars] Add to cart', props<{ payload: Guitar; }>());
export const RemoveFromCart = createAction('[Guitars] Remove from cart', props<{ payload: Guitar; }>());
export const LoadItems = createAction('[Guitars] Load items from server');
export const LoadItemsSuccess = createAction('[Guitars] Load success', props<{ payload: Guitar[]; }>());
export const LoadItemsFailure = createAction('[Guitars] Load failure', props<{ error: any; }>());
