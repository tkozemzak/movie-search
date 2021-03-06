import { MOVIE_LIST, MOVIE_TYPE, RESPONSE_PAGE, LOAD_MORE_RESULTS, SEARCH_QUERY, SEARCH_RESULTS } from '../types';

const initialState = {
  list: [],
  page: 1,
  totalPages: 0,
  movieType: 'now_playing',
  searchQuery: '',
  searchResults: []
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
    case LOAD_MORE_RESULTS:
      console.log('action.payload.list', action.payload.list)
      return {
        ...state,
        list: [...state.list, ...action.payload.list],
        page: action.payload.page,
        totalPages: action.payload.totalPages
      };

    case MOVIE_TYPE:
      return {
        ...state,
        movieType: action.payload
      };

    case SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload
      };
    case SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload
      };

    default:
      return state;
  }
};

export default movieReducer;
