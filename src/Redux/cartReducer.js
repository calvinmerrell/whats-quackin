const initialState = {
    cart: [],
    total: 0,
  }
  
  const ADD_TO_CART = 'ADD_TO_CART'
  
  export function addToCart(product) {
    return {
      type: ADD_TO_CART,
      payload: product,
    }
  }
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case ADD_TO_CART:
        const newCart = [...state.cart, action.payload]
        const total = newCart.reduce((acc, e) => {
          return acc + e.price
        }, 0)
        return { ...state, cart: newCart, total }
      default:
        return state
    }
  }