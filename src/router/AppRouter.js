import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { startChecking } from '../actions/auth'
import { ProfileScreen } from '../components/ProfileScreen'
import MainSearch from '../pages/Mainsearch'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {

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

          <Route
            exact
            path="/perfil"
            component={ ProfileScreen }
            // isAuthenticated={ !!uid }
          />

          <Route
            exact
            path="/"
            component={ MainSearch }
            // isAuthenticated={ !!uid }
          />

          <Redirect to="/" />

        </Switch>
      </div>
    </Router>
  )
}