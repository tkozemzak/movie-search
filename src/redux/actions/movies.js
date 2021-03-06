import { MOVIE_LIST, MOVIE_TYPE, SET_ERROR, RESPONSE_PAGE, LOAD_MORE_RESULTS, SEARCH_RESULTS, SEARCH_QUERY } from '../types';
import { MOVIE_API_URL, SEARCH_API_URL } from '../../services/movies.service';

export const getMovies = (type, pageNumber) => async (dispatch) => {
  try {
    const response = await getMovieRequest(type, pageNumber);
    const { results, payload } = response;
    console.log('response', response)
    dispatchMethod(MOVIE_LIST, results, dispatch);
    dispatchMethod(RESPONSE_PAGE, payload, dispatch);
  } catch (error) {
    if (error.response) {
      console.log('error', error)
      dispatchMethod(SET_ERROR, error.response.data.message, dispatch);
    }
  }
};

export const loadMoreMovies = (type, pageNumber) => async (dispatch) => {
  try {
    const response = await getMovieRequest(type, pageNumber);
    const { results, payload } = response;
    dispatchMethod(LOAD_MORE_RESULTS, { list: results, page: payload.page, totalPages: payload.totalPages }, dispatch);
  } catch (error) {
    if (error.response) {
      dispatchMethod(SET_ERROR, error.response.data.message, dispatch);
    }
  }
};

export const setResponsePageNumber = (page, totalPages) => async (dispatch) => {
  const payload = { page, totalPages };
  dispatchMethod(RESPONSE_PAGE, payload, dispatch);
};

export const setMovieType = (type) => async (dispatch) => {
  dispatchMethod(MOVIE_TYPE, type, dispatch);
};

export const searchQuery = (query) => async (dispatch) => {
  dispatchMethod(SEARCH_QUERY, query, dispatch);
};

export const searchResults = (query) => async (dispatch) => {
  try {
    if (query) {
      const movies = await SEARCH_API_URL(query);
      let { results } = movies.data;
      results = results.filter((item)=> {
        return !item.title.includes('%')
      })
      dispatchMethod(SEARCH_RESULTS, results, dispatch);
    } else {
      dispatchMethod(SEARCH_RESULTS, [], dispatch);
    }
  } catch (error) {
    if (error.response) {
      dispatchMethod(SET_ERROR, error.response.data.message, dispatch);
    }
  }
};

const getMovieRequest = async (type, pageNumber) => {
  const movies = await MOVIE_API_URL(type, pageNumber);

  let { results, page, total_pages } = movies.data;

  results = results.filter((item)=> {
    return !item.title.includes('%')
  })

  const payload = {
    page,
    totalPages: total_pages
  };
  
  console.log('results after filter', results)
  return { results, payload };
};

const dispatchMethod = (type, payload, dispatch) => {
  dispatch({
    type,
    payload
  });
};
