import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import auth from './auth_reducer.js'

const rootReducer = combineReducers({
  form,
  auth
});

export default rootReducer;
