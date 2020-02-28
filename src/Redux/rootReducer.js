import { combineReducers } from 'redux'
import CartReducer from './Cart/CartReducer'
import WishReducer from './Wish/WishReducer'


const rootReducer = combineReducers({
    Cart: CartReducer,
    Wish: WishReducer
})

export default rootReducer