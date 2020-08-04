import AsyncStorage from '@react-native-community/async-storage';
import { formatDecks, DECKS_STORAGE_KEY } from './_decks';

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(formatDecks)
}

export function submitDeck(deck) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck))
}

export function addCardToDeck({ decks, deckId, card }) {
  let updatedDecks = {
    ...decks,
    [deckId]: {
      ...decks[deckId],
      questions: decks[deckId].questions.concat([card])
    }
  };
  return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(updatedDecks))
}

export function removeDeck({ decks, deckId }) {
  let decksCopy = Object.assign({}, decks);
  delete decksCopy[deckId];
  return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decksCopy))
}