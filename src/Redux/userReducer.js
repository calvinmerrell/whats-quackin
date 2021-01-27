

const initialState = {
    username: '',
    isLoggedIn: false
}

// action constants
const LOGIN_USER = 'LOGIN_USER'
const LOGOUT = 'LOGOUT'

// action creators
export function loginUser(username){
    return{
        type: LOGIN_USER,
        payload: username,
    }
}

export function logout(){
    return{
        type: LOGOUT
    }
}

//reducer function
export default function reducer(state = initialState,action){
    switch(action.type){
        case LOGIN_USER: 
            return{...state,username: action.payload, isLoggedIn: true}
        case LOGOUT:
            return initialState
        default: 
            return state
    }
}