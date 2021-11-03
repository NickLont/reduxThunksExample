import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import charactersReducer from './reducers/characters'

const reducers = combineReducers({
  characters: charactersReducer
})

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window?.devToolsExtension ? window.devToolsExtension() : f => f
  ))

export default store
