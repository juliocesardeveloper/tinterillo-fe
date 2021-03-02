import { fetchSinToken } from "../helpers/fetch"
import { types } from '../types/types'
import Swal from 'sweetalert2'

export const startLogin = ( email, password ) => {
  return async( dispatch ) => {
    const resp = await fetchSinToken( 'auth/sign-in', { email, password }, 'POST' );
    const body = await resp.json();

    if ( body.ok ) {
      localStorage.setItem( 'token', body.token );
      localStorage.setItem( 'token-init-date', new Date().getTime() );

      dispatch( login({
        uid: body.uid,
        name: body.name
      }))
    } else {
      Swal.fire( 'Error', body.msg, 'error' );
    }
  }
}

export const startRegister = ( email, password, name ) => {
  return async( dispatch ) => {
    const resp = await fetchSinToken( 'auth/sign-up', { email, password, name }, 'POST' );
    const body = await resp.json();

    if ( body.ok ) {
      localStorage.setItem( 'token', body.token );
      localStorage.setItem( 'token-init-date', new Date().getTime() );

      dispatch( login({
        uid: body.uid,
        name: body.name
      }))
    } else {
      Swal.fire( 'Error', body.msg, 'error' );
    }
  }
}

const login = ( user ) => ({
  type: types.authLogin,
  payload: user
})