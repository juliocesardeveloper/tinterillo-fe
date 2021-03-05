import React from 'react'
import { useDispatch } from 'react-redux'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { ProfileScreen } from '../components/ProfileScreen'
import MainSearch from '../pages/Mainsearch'


export const AppRouter = () => {
  

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/perfil" component={ ProfileScreen } />
          <Route exact path="/" component={ MainSearch } />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}