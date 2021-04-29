import { MOVIE_LIST, RESPONSE_PAGE } from '../types';

const initialState = {
  list: [],
  page: 1,
  totalPages: 0
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_LIST:
      return {
        ...state,
        list: action.payload
      };
    case RESPONSE_PAGE:
      return {
        ...state,
        page: action.payload.page,
        totalPages: action.payload.totalPages
      };

    default:
      return state;
  }
};

export default movieReducer;
