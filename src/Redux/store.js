import {createStore, combineReducers, applyMiddleware} from "redux"
import userReducer from './userReducer'
import cartReducer from './cartReducer'
import productReducer from './productReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware'


const composeEnhancers = composeWithDevTools({
  });

const rootReducer = combineReducers({
    user: userReducer,
    products: productReducer,
    cart: cartReducer,
})


export default createStore(rootReducer,composeEnhancers(applyMiddleware(promiseMiddleware)))
