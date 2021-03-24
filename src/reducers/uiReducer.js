import { types } from "../types/types";

const initialState = {
  modalOpen: false,
  loading: false,
  msgError: null,
  isLogged: false
}

export const uiReducer = ( state = initialState, action ) => {

  switch ( action.type ) {
    case types.uiOpenModal:
      return {
        ...state,
        modalOpen: true
      }

    case types.uiSetError:
      return {
        ...state,
        msgError: action.payload
      }

    case types.uiStartLoading:
      return {
        ...state,
        loading: true
      }

    case types.uiFinishLoading:
      return {
        ...state,
        loading: false
      }

    case types.uiIsLogged:
      return {
        ...state,
        isLogged: true
      }

      case types.uiIsLoggedOut:
        return {
          ...state,
          isLogged: false
        }

    case types.uiRemoveError:
      return {
        ...state,
        msgError: null
      }

    case types.uiCloseModal:
      return {
        ...state,
        modalOpen: false
      }

    default:
      return state;
  }

}