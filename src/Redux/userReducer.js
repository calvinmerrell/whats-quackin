

const initialState = {
    user: {},
    isLoggedIn: false
}

// action constants
const LOGIN_USER = 'LOGIN_USER'
const LOGOUT = 'LOGOUT'

// action creators
export function loginUser(payload){
    return{
        type: LOGIN_USER,
        payload 
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
            return{...state, user: action.payload, isLoggedIn: true}
        case LOGOUT:
            return initialState
        default: 
            return state
    }
}