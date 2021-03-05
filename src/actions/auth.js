import { fetchSinToken, fetchConToken } from "../helpers/fetch"
import { types } from '../types/types'
import Swal from 'sweetalert2'



// export const startLogin = ( email, password ) => {

//   return async() => {

//     const resp = await fetchSinToken('auth/sign-in', { email, password }, 'POST');
//     const body = await resp.json();

//     console.log(body.message);

//   }

export const startLogin = ( email, password ) => {
  return async( dispatch ) => {
    const resp = await fetchSinToken( 'auth/sign-in', { email, password }, 'POST' );
    const body = await resp.json();

    console.log(body.user);

    if ( body.message === "This user exist." ) {
      localStorage.setItem( 'token', body.token );
      localStorage.setItem( 'token-init-date', new Date().getTime() );

      dispatch( login({
        uid: body.user._id,
        name: body.user.name
      }))
    } else {
      // Swal.fire( 'Error', body.msg, 'error' );
      console.log(body.message);
    }
  }
}

export const startRegister = ( email, password, name ) => {
  return async( dispatch ) => {
    const resp = await fetchSinToken( 'auth/sign-up', { email, password, name }, 'POST' );
    const body = await resp.json();

    if ( body.message === "This user exist." ) {
      localStorage.setItem( 'token', body.token );
      localStorage.setItem( 'token-init-date', new Date().getTime() );

      dispatch( login({
        uid: body.user._id,
        name: body.user.name
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