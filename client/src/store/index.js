import rootReducers from './reducers/rootReducers'

import { legacy_createStore as createStore, applyMiddleware } from "redux"

import thunk from 'redux-thunk'

let store = createStore(rootReducers, applyMiddleware(thunk))

store.subscribe(() => console.log(store.getState()))

export default store