import {createStore} from "redux"
import userReducer from './userReducer'
import {devToolsEnhancer} from 'redux-devtools-extension'


export default createStore(userReducer,devToolsEnhancer())
