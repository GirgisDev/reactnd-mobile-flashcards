import AsyncStorage from '@react-native-community/async-storage';
import { formatDecks, DECKS_STORAGE_KEY } from './_decks';

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(formatDecks)
}

export function submitDeck(deck) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck))
}

export function removeDeck(key) {
  AsyncStorage.removeItem(key)
}