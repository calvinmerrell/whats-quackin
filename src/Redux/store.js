import {createStore, combineReducers, applyMiddleware} from "redux"
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './userReducer'
import cartReducer from './cartReducer'
import {devToolsEnhancer} from 'redux-devtools-extension'

const rootReducer = combineReducers({
    user: userReducer,
    products: cartReducer,
})


export default createStore(rootReducer,applyMiddleware(promiseMiddleware)(devToolsEnhancer()))
