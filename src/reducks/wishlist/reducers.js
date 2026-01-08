import { SET_WISHLIST } from "./actions";

const initialState = {
  list: [],
};

const WishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WISHLIST:
    case "FETCH_WISHLIST_SUCCESS":
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default WishlistReducer;
