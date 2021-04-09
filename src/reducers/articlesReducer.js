import { types } from '../types/types'


const initialState = {
  articles: [],
  active: null,
  like: false
}

export const articlesReducer = ( state = initialState, action ) => {

  switch (action.type) {

    case types.articlesActive:
      return {
        ...state,
        active: {
          ...action.payload
        }
      }
    
    case types.articlesLoad:
      return {
        ...state,
        articles: [ ...action.payload ]
      }

    case types.articlesUpdated:
      return {
        ...state,
        articles: state.articles.map(
          article => article.id === action.payload.id
            ? action.payload.article
            : article
        )
      }

    case types.articlesLike:
      return {
        ...state,
        like: true
      }

    case types.articlesDislike:
      return {
        ...state,
        like: false
      }

    case types.articlesLogoutCleaning:
      return {
        ...state,
        active: null,
        articles: []
      }

    case types.articlesDelete:
      return {
        ...state,
        active: null,
        articles: state.articles.filter( article => article.id !== action.payload )
      }

    default:
      return state;
  }

}

