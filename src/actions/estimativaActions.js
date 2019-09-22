import {
    GET_ESTIMATIVAS,
    GET_ESTIMATIVASANO,
    SET_LOADING,
    ESTIMATIVAS_ERROR,
    SEARCH_ESTIMATIVAS,
    SET_CURRENT,
    CLEAR_CURRENT
  } from './types';
  
  
 
  export const getEstimativas = () => async dispatch => {
    try {
      setLoading();
  
      const res = await fetch('/estimativa_taxa_selic');
      const data = await res.json();
  
      dispatch({
        type: GET_ESTIMATIVAS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: ESTIMATIVAS_ERROR,
        payload: err.response.statusText
      });
    }
  };

  export const getEstimativasAno = () => async dispatch => {
    try {
      setLoading();
  
      const res = await fetch('/estimativa_taxa_selic');
      const data = await res.json();

      const soma = data.reduce(function (prevVal, elem ){
        return prevVal + elem.estimativa_taxa_selic;
      }, 0);
  
      dispatch({
        type: GET_ESTIMATIVASANO,
        payload: soma
      });
    } catch (err) {
      dispatch({
        type: ESTIMATIVAS_ERROR,
        payload: err.response.statusText
      });
    }
  };
  
  
 
  export const searchEstimativas = text => async dispatch => {
    try {
      setLoading();
  
      const res = await fetch(`/estimativa_taxa_selic?q=${text}`);
      const data = await res.json();
  
      dispatch({
        type: SEARCH_ESTIMATIVAS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: ESTIMATIVAS_ERROR,
        payload: err.response.statusText
      });
    }
  };
  
 
  export const setCurrent = estimativa => {
    return {
      type: SET_CURRENT,
      payload: estimativa
    };
  };
  

  export const clearCurrent = () => {
    return {
      type: CLEAR_CURRENT
    };
  };
  
 
  export const setLoading = () => {
    return {
      type: SET_LOADING
    };
  };