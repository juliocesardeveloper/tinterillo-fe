import { db } from "../firebase/firebaseConfig";
import { loadArticles } from "../helpers/loadArticles";
import { types } from "../types/types";


export const openArticle = () => {
  return async( dispatch, getState ) => {
    
    const { uid } = getState().auth;
    console.log(uid);
    
    const newArticle = {
      title: '',
      body: ''
    }

    const doc = await db.collection(`${ uid }/selectedArticles/articles`).add( newArticle )
    console.log(doc);
    // dispatch( activeArticle( doc.id, newArticle ) );
  }



}

export const activeArticle = ( id, article ) => ({
  type: types.articlesActive,
  payload: {
    id,
    ...article
  }
});

export const startLoadingArticles = ( uid ) => {
  return async( dispatch ) => {
    const articles = await loadArticles( uid );
    dispatch(setArticles( articles ));
  }
}

export const setArticles = ( articles ) => ({
  type: types.articlesLoad,
  payload: articles
})

export const likeArticle = () => ({ type: types.articlesLike })
export const dislikeArticle = () => ({ type: types.articlesDislike })

export const cleanArticles = () => ({
  type: types.articlesLogoutCleaning
});