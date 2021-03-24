import { types } from "../types/types";


export const openArticle = () => {
  return async( dispatch, getState ) => {
    
    const state = getState();
    console.log(state);
    
    
    // dispatch( activeArticle( id, article ) );

  }



}

export const activeArticle = ( id, article ) => ({
  type: types.articlesActive,
  payload: {
    id,
    ...article
  }
});

export const cleanArticles = () => ({
  type: types.articlesLogoutCleaning
});