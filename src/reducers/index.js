import { combineReducers } from 'redux';
import estimativaReducer from './estimativaReducer';

export default combineReducers({
  estimativa: estimativaReducer
});
