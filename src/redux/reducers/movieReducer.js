import { MOVIE_LIST } from '../types';

const initialState = {
  list: []
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_LIST:
      return {
        ...state,
        list: action.payload
      };

    default:
      return state;
  }
};

export default movieReducer;
