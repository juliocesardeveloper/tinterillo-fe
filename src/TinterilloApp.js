import React from 'react'
import { Provider } from 'react-redux'
import MainSearch from './pages/Mainsearch'
import { store } from './store/store'


export const TinterilloApp = () => {
  return (
      <Provider store={ store } >
        <MainSearch />
      </Provider>
  )
}
