import { ADD_WISH } from './WishType'

const initialState = {
    wishCount: 0
}

const wishReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WISH: return {
            ...state,
            wishCount: state.wishCount + 1
        }
        default : return state
    }
}

export default wishReducer