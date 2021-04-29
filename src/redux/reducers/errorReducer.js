import { SET_ERROR } from '../types';

const initialState = '';

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export default errorReducer;
