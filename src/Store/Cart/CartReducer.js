import { CART_ACTION_TYPES } from "./CartTypes"

export const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
}

export const cartReducer = (state=INITIAL_STATE, action={}) => {
    const{type, payload} = action

    switch (type){
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: payload,
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
        case CART_ACTION_TYPES.SET_CART_EMPTY:
            return {...state,
                cartItems: INITIAL_STATE.cartItems
            }
        default:
            return state
    }
}
