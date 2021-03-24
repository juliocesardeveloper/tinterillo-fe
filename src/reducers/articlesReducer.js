import { types } from '../types/types'


const initialState = {
  articles: [],
  active: null
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

    case types.articlesLogoutCleaning:
      return {
        ...state,
        active: null,
        articles: []
      }

    default:
      return state;
  }

}

