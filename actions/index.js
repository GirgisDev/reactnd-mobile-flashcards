export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
export const DELETE_DECK = "DELETE_DECK";

export const receiveDecks = decks => {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export const addDeck = deck => {
  return {
    type: ADD_DECK,
    deck
  }
}

export const addCard = (id, card) => {
  return {
    type: ADD_CARD,
    id,
    card
  }
}

export const deleteDeck = id => {
  return {
    type: DELETE_DECK,
    id
  }
}