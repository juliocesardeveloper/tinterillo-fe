import { types } from '../types/types';



export const uiOpenModal = () => ({ type: types.uiOpenModal });
export const uiCloseModal = () => ({ type: types.uiCloseModal });
export const uiSetError = ( err ) => ({
  type: types.uiSetError,
  payload: err
});
export const uiRemoveError = () => ({
  type: types.uiRemoveError
});
export const uiStartLoading = () => ({ type: types.uiStartLoading });
export const uiFinishLoading = () => ({ type: types.uiFinishLoading });
export const uiIsLogged = () => ({ type: types.uiIsLogged });
export const uiIsLoggedOut = () => ({ type: types.uiIsLoggedOut });