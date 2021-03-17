import React, { useEffect, useState } from 'react'
import { firebase } from '../firebase/firebaseConfig';
import { useDispatch, useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { AiOutlineReload } from 'react-icons/ai'
import { login, startChecking } from '../actions/auth'
import { ProfileScreen } from '../components/ProfileScreen'
import MainSearch from '../pages/Mainsearch'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { uiIsLogged } from '../actions/ui';

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  useEffect(() => {

    firebase.auth().onAuthStateChanged( (user) => {
      if ( user?.uid ) {
        dispatch( login( user.uid, user.displayName ) );
        dispatch( uiIsLogged() )
        setIsLoggedIn( true );
      } else {
        setIsLoggedIn( false );
      }
      setChecking(false);
    })

  }, [ dispatch, setChecking, setIsLoggedIn ])

  if ( checking ) {
    return (
      <h1><AiOutlineReload /> Espere...</h1>
    )
  }

  // const dispatch = useDispatch();
  // const { checking, uid } = useSelector( state => state.auth )

  // useEffect(() => {
  //   dispatch( startChecking );
  // }, [dispatch])

  // if ( checking ) {
  //   return ( <h5>Espera</h5> )
  // }

  return (
    <Router>
      <div>
        <Switch>

          <PrivateRoute
            exact
            path="/perfil"
            component={ ProfileScreen }
            isAuthenticated={ isLoggedIn }
          />

          <Route
            exact
            path="/"
            component={ MainSearch }
            isAuthenticated={ isLoggedIn }
          />

          <Redirect to="/" />

        </Switch>
      </div>
    </Router>
  )
}