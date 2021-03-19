import { fetchAut } from "../helpers/fetch"
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig'
import { types } from '../types/types'
import Swal from 'sweetalert2'
import { uiFinishLoading, uiIsLogged, uiIsLoggedOut, uiStartLoading } from "./ui"

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {

    dispatch( uiStartLoading() );

    firebase.auth().signInWithEmailAndPassword( email, password )
      .then( ({ user }) => {

        if ( user.uid ) {
          dispatch( login( user.uid, user.displayName ));
          dispatch( uiFinishLoading() );

          Swal.fire({
            icon: 'success',
            title: 'Felicitaciones, has ingresado satisfactoriamente!',
            showConfirmButton: false,
            timer: 1500
          })
        }

      })
      .catch( (e) => {
        console.log(e);
        dispatch( uiFinishLoading() );
        if ( e.message )
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: e.message,
          footer: '<a classname="swal-text" href="/">Ir al inicio</a>'
        })
      })
  }
}

export const startGoogleLogin = () => {
  return ( dispatch ) => {

    firebase.auth().signInWithPopup( googleAuthProvider )
      .then( ({ user }) => {
        dispatch(
          login( user.uid, user.displayName )
        )
        // dispatch( uiIsLogged() )
      })

  }

}

export const login = ( uid, displayName ) => ({

    type: types.authLogin,
    payload: {
      uid,
      displayName
    }

})

export const startLogout = () => {
  return async( dispatch ) => {
    await firebase.auth().signOut();
    dispatch( authLogout() )
    // dispatch( uiIsLoggedOut() )
  }
}

export const authLogout = () => ({
  type: types.authLogout
})

// export const startLogin = ( email, password ) => {
//   return async( dispatch ) => {
//     const resp = await fetchAut( 'auth/sign-in', { email, password }, 'POST' );
//     const body = await resp.json();


//     console.log(body);

//     if ( body.ok ) {

//       dispatch( login({
//         uid: body._id,
//         name: body.name
//       }))

//     } else {
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: '¿Ya te registraste?',
//         footer: '<a classname="swal-text" href="/">Ir al inicio</a>'
//       })
//     }
//   }
// }

export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
  return ( dispatch ) => {
    firebase.auth().createUserWithEmailAndPassword( email, password )
    .then( async({ user }) => {

      if ( user.uid ) {

        await user.updateProfile({ displayName: name });

        dispatch(
          login( user.uid, user.displayName )
        )

        Swal.fire({
          icon: 'success',
          title: 'Felicitaciones, te has registrado satisfactoriamente',
          showConfirmButton: false,
          timer: 1500
        })
      }

    })
    .catch( (e) => {
      if ( e.message )
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: e.message,
        footer: '<a classname="swal-text" href="/">Ir al inicio</a>'
      })
    })
  }
}

export const startRegister = ( email, password, name ) => {
  return async( dispatch ) => {
    const resp = await fetchAut( 'auth/sign-up', { email, password, name }, 'POST' );
    const body = await resp.json();

    if ( body.ok ) {

      dispatch( login({
        uid: body._id,
        name: body.name
      }))

      Swal.fire({
        icon: 'success',
        title: 'Felicitaciones, te has registrado satisfactoriamente',
        showConfirmButton: false,
        timer: 1500
      })

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

// export const startChecking = ( email, password ) => {
//   return async(dispatch) => {
//     const resp = await fetchAut( 'auth/sign-in', { email, password } );
//     const body = await resp.json();

//     if ( body.ok ) {

//       dispatch( login({
//         uid: body._id,
//         name: body.name
//       }))
//     } else {
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Ya te registraste antes',
//         footer: '<a classname="swal-text" href="/">Ir al inicio</a>'
//       })
//       dispatch( checkingFinish() );
//     }
//   }
// }

// const checkingFinish = () => ({ type: types.authCheckingFinish })

// const login = ( user ) => ({
//   type: types.authLogin,
//   payload: user
// })