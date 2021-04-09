import Swal from "sweetalert2";
import { db } from "../firebase/firebaseConfig";
import { loadArticles } from "../helpers/loadArticles";
import { types } from "../types/types";


export const openArticle = (article) => {
  return async( dispatch, getState ) => {
    
    const { uid } = getState().auth;
    console.log(uid);
    
    const newArticle = {
      // headline: {},
      // chapter: {},
      // article: {}
      article: article
  
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

export const startSaveArticle = ( article ) => {
  return async( dispatch, getState ) => {

    const { uid } = getState().auth;

    const articleToFirestore = { ...article };
    delete articleToFirestore.id;

    const doc = await db.collection(`${ uid }/selectedArticles/articles`).add( articleToFirestore )
    // console.log(doc);
    dispatch( activeArticle( doc.id, articleToFirestore ) );

    dispatch( refreshArticle( doc.id, articleToFirestore ) );

    Swal.fire({
      icon: 'success',
      title: 'Agregado a favoritos',
      showConfirmButton: false,
      timer: 1500
    })

  }
}

export const refreshArticle = ( id, article ) => ({
  type: types.articlesUpdated,
  payload: {
    id,
    article: {
      id,
      ...article
    }
  }
})

export const startDeleting = ( id ) => {
  return async( dispatch, getState ) => {
    const uid = getState().auth.uid;
    await db.doc(`${ uid }/selectedArticles/articles/${ id }`).delete();

    dispatch( deleteArticle(id) );
  }
}

export const deleteArticle = (id) => ({
  type: types.articlesDelete,
  payload: id
})

export const likeArticle = () => ({ type: types.articlesLike })
export const dislikeArticle = () => ({ type: types.articlesDislike })

export const cleanArticles = () => ({
  type: types.articlesLogoutCleaning
});