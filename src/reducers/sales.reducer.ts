import { salesTypes } from "../actions/sales.actions";
import { ISalesState } from ".";

const initialState: ISalesState = {
    displayItem: undefined
}

export const salesReducer = (state = initialState, action) => {
  switch (action.type) {
    case salesTypes.UPDATE_DISPLAY_ITEM:
      return {
        ...state,
        currentUser: action.payload.displayItem
      }
    default:

  }
  return state;
}