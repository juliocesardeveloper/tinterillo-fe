import { types } from "../types/types";

const initialState = {
  checking: true,
  // uid: null,
  // name: null
}

export const authReducer = ( state = initialState, action ) => {
// export const authReducer = ( state = {}, action ) => {

  switch ( action.type ) {

    case types.authLogin:
      return {
        ...state,
        ...action.payload,
        // uid: action.payload.uid,
        // name: action.payload.displayName,
        checking: false
      }
    
    case types.authLogout:
      return { }

    // case types.authCheckingFinish:
    //   return {
    //     ...state,
    //     checking: false
    //   }

    default:
      return state;
  }
}