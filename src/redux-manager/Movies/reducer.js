import { SEARCH_MOVIE } from "../constants";

const initialValues = {
  cartMovies: [],
};

const cartReducer = (state = initialValues, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return { ...state, cartMovies: action.payload };

    default:
      return state;
  }
};

export default cartReducer;
