import {
    GET_ESTIMATIVAS,
    SET_LOADING,
    ESTIMATIVAS_ERROR,
    SEARCH_ESTIMATIVAS,
    SET_CURRENT,
    CLEAR_CURRENT
  } from '../actions/types';
  
  const initialState = {
    estimativa: null,
    current: null,
    loading: false,
    error: null
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_ESTIMATIVAS:
        return {
          ...state,
          estimativa: action.payload,
          loading: false
        };
      case SEARCH_ESTIMATIVAS:
        return {
          ...state,
          estimativa: action.payload
        };
      case SET_CURRENT:
        return {
          ...state,
          current: action.payload
        };
      case CLEAR_CURRENT:
        return {
          ...state,
          current: null
        };
      case SET_LOADING:
        return {
          ...state,
          loading: true
        };
      case ESTIMATIVAS_ERROR:
        console.error(action.payload);
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };