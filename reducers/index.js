import { RECEIVE_DECKS, ADD_DECK, DELETE_DECK, ADD_CARD } from "./../actions";

export default function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return { ...state, ...action.decks };
    case ADD_DECK:
      return { ...state, ...action.deck }
    case ADD_CARD:
      const { id, card } = action;
      return { 
        ...state, 
        [id]: {
          ...state[id],
          questions: state[id].questions.concat([card])
        }
      }
    case DELETE_DECK:
      let decksCopy = Object.assign({}, state);
      delete decksCopy[action.id];
      return decksCopy;
    default:
      return state;
  }
}