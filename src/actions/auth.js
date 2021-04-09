import { fetchSinToken, fetchConToken } from "../helpers/fetch"
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig'
import { types } from '../types/types'
import Swal from 'sweetalert2'
import { uiFinishLoading, uiIsLogged, uiIsLoggedOut, uiStartLoading } from "./ui"

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {

    dispatch( uiStartLoading() );

    firebase.auth().signInWithEmailAndPassword( email, password )
      .then( ({ user }) => {
        console.log(user.uid);
        localStorage.setItem('uid', user.uid);

        if ( user.uid ) {
          dispatch( firebaseLogin( user.uid, user.displayName ));
          dispatch( uiFinishLoading() );

          Swal.fire({
            icon: 'success',
            title: 'Felicitaciones, has ingresado satisfactoriamente!',
            showConfirmButton: false,
            timer: 3000
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

export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
  return ( dispatch ) => {
    firebase.auth().createUserWithEmailAndPassword( email, password )
    .then( async({ user }) => {

      if ( user.uid ) {

        await user.updateProfile({ displayName: name });

        dispatch(
          firebaseLogin( user.uid, user.displayName )
        )

        Swal.fire({
          icon: 'success',
          title: 'Felicitaciones, te has registrado satisfactoriamente',
          showConfirmButton: false,
          timer: 3000
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

export const startGoogleLogin = () => {
  return ( dispatch ) => {

    firebase.auth().signInWithPopup( googleAuthProvider )
      .then( ({ user }) => {
        dispatch(
          firebaseLogin( user.uid, user.displayName )
        )
        dispatch( uiIsLogged() )
      })

  }

}

export const firebaseLogin = ( uid, displayName ) => ({

    type: types.authLogin,
    payload: {
      uid,
      displayName,
    }

})

export const startLogout = () => {
  return async( dispatch ) => {
    await firebase.auth().signOut();
    dispatch( authLogout() )
    dispatch( uiIsLoggedOut() )
  }
}

export const authLogout = () => ({
  type: types.authLogout
})

// export const startLogin = ( email, password ) => {
//   return async( dispatch ) => {
//     const resp = await fetchSinToken( 'auth/sign-in', { email, password }, 'POST' );
//     const body = await resp.json();
//     console.log(body);
//     if( body.message === "This user exist." ) {
//       localStorage.setItem('token', body.token);
//       localStorage.setItem('token-init-date', new Date().getTime() );

//       dispatch( login({
//         uid: body.user._id,
//         name: body.user.name
//       }))

//     }
    
//   }


  //   if ( body.ok ) {

  //     dispatch( login({
  //       uid: body._id,
  //       name: body.name
  //     }))

  //   } else {
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Oops...',
  //       text: '¿Ya te registraste?',
  //       footer: '<a classname="swal-text" href="/">Ir al inicio</a>'
  //     })
  //   }
  // }
// }


export const startRegister = ( name, lastName, email, password, department, gender, birthDate, job ) => {
  return async() => {
    const resp = await fetchSinToken( 'auth/sign-up', { name, lastName, email, password, department, gender, birthDate, job }, 'POST' );
    const body = await resp.json();
    console.log(body);
    // if ( body.ok ) {



    //   Swal.fire({
    //     icon: 'success',
    //     title: 'Felicitaciones, te has registrado satisfactoriamente',
    //     showConfirmButton: false,
    //     timer: 1500
    //   })

    // } else {
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: 'Ya te registraste antes',
    //     footer: '<a classname="swal-text" href="/">Ir al inicio</a>'
    //   })
    // }
  }
}

// export const startChecking = ( email, password ) => {
//   return async(dispatch) => {
//     const resp = await fetchConToken( 'auth/sign-in', { email, password }, 'POST' );
//     const body = await resp.json();
//     console.log(body);
//     if ( body.message === "This user exist." ) {

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