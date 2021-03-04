import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer

})