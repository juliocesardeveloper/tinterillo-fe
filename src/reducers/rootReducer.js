import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { authReducer } from './authReducer';
import { articlesReducer } from './articlesReducer';

export const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  articles: articlesReducer

})