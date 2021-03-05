import { fetchSinToken, fetchConToken } from "../helpers/fetch"
import { types } from '../types/types'
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'

export const startLogin = ( email, password ) => {
  return async( dispatch ) => {
    const resp = await fetchSinToken( 'auth/sign-in', { email, password }, 'POST' );
    const body = await resp.json();
    
    console.log(body);
    console.log(Cookies.get('token', { domain: '/'}));


    if ( body.message === "This user exist." ) {
      localStorage.setItem( 'token', body.token );
      localStorage.setItem( 'token-init-date', new Date().getTime() );

      dispatch( login({
        uid: body.user._id,
        name: body.user.name
      }))

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¿Ya te registraste?',
        footer: '<a classname="swal-text" href="/">Ir al inicio</a>'
      })
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
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ya te registraste antes',
        footer: '<a classname="swal-text" href="/">Ir al inicio</a>'
      })
    }
  }
}

export const startChecking = () => {
  return async(dispatch) => {
    const resp = await fetchConToken( 'user/:userId' );
    const body = await resp.json();

    if ( body.message === "This user exist." ) {
      localStorage.setItem( 'token', body.token );
      localStorage.setItem( 'token-init-date', new Date().getTime() );

      dispatch( login({
        uid: body.user._id,
        name: body.user.name
      }))
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ya te registraste antes',
        footer: '<a classname="swal-text" href="/">Ir al inicio</a>'
      })
      dispatch( checkingFinish() );
    }
  }
}

const checkingFinish = () => ({ type: types.authCheckingFinish })

const login = ( user ) => ({
  type: types.authLogin,
  payload: user
})