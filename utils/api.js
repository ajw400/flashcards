import { AsyncStorage } from 'react-native'

export const DECK = 'DeckKey9'
export const CARD = 'FlashcardsKey1'

export function submitDeck({ key, entry }) {
  return AsyncStorage.mergeItem(DECK, JSON.stringify({
    [key]: entry
  }))
}

export function submitCard({ entry, deckId }) {
  return AsyncStorage.getItem(DECK)
    .then((results) => {
      const data = JSON.parse(results)
      data[deckId].cards.push(entry)
      AsyncStorage.setItem(DECK, JSON.stringify(data))
      return {...data[deckId], id: deckId}
    })
}

export function removeEntry({ key, type }) {
  return AsyncStorage.getItem(type)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(type, JSON.stringify(data))
    })
}

export function generateId() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}


export function readDecks() {
  return AsyncStorage.getItem(DECK)
    .then((results) => {
      const data = JSON.parse(results)
      const decksArray = []
      Object.keys(data).map((key) => {
        decksArray.push({...data[key], id: key})
      })
      return decksArray
    })
}
