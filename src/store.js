import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import listingsReducer from './reducers/listings'

const reducers = combineReducers({
  listings: listingsReducer
})

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window?.devToolsExtension ? window.devToolsExtension() : f => f
  ))

export default store
