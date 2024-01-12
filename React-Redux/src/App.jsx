import React from 'react'
import {createStore,combineReducers} from "redux"
import { Provider } from 'react-redux'
import LikeCounter from './Components/LikeCounter'
import {reducer} from "./components/Reducer"

const rootReducer=combineReducers({
  reducer

})

const store=createStore(rootReducer)

function App() {

  return (
    <Provider store={store}>
      <LikeCounter />
    </Provider>

  )
}

export default App