import {createStore, combineReducers, applyMiddleware} from "redux"
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './userReducer'
import cartReducer from './cartReducer'
import {composeWithDevTools} from 'redux-devtools-extension'


const composeEnhancers = composeWithDevTools({
  });

const rootReducer = combineReducers({
    user: userReducer,
    products: cartReducer,
})


export default createStore(rootReducer,composeEnhancers(applyMiddleware(promiseMiddleware)))
