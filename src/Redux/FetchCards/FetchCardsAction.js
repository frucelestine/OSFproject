import {
  FETCH_CARDS_PENDING,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_ERROR
} from "./FetchCardsTypes";

export function fetchCardsPending() {
  return {
    type: FETCH_CARDS_PENDING
  };
}

export function fetchCardsSuccess(cards) {
  return {
    type: FETCH_CARDS_SUCCESS,
    cards: cards
  };
}

export function fetchCardsError(error) {
  return {
    type: FETCH_CARDS_ERROR,
    error: error
  };
}
