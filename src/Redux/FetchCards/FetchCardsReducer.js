import {FETCH_CARDS_PENDING,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_ERROR
} from "./FetchCardsAction"
  
const initialState = {
  pending: false,
  cards: [],
  error: null
}

export default function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CARDS_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_CARDS_SUCCESS:
      return {
        ...state,
        pending: false,
        cards: action.payload
      }
    case FETCH_CARDS_ERROR:
      return{
        ...state,
        pending: false,
        error: action.error
      }
    default: return state;
  }
}

export const getCards = state => state.cards;
export const getCardsPending = state => state.pending;
export const getCardsError = state => state.error;