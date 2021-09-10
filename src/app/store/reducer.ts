import { Guitar } from './../models/guitar.model';
import { Actions, ActionTypes, AddToCart } from './actions';

export const initialState = {
  items: [],
  cart: []
};

export function ShopReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.LoadSuccess:
      return {
        ...state,
        items: [...action.payload]
      };

    case ActionTypes.Add:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    case ActionTypes.Remove: // Remove item base on the guitar name. Can't have two guitars with the same name.
      return {
        ...state,
        cart: [...state.cart.filter((item) => item.name !== action.payload.name)]
      };

    default:
      return state;
  }
}