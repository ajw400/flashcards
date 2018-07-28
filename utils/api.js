import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'


export const DECK = 'DeckKey9'
export const CARD = 'FlashcardsKey1'
export const CAL ='calendar'

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

export function createNotification() {
  return {
    title: "Study Reminder",
    body: "Don't forget to study today!",
    ios: {
      sound: true
    },
    android: {
      vibrate: true,
      priority: 'high',
      sound: true,
      sticky: false
    }
  }
}

export function setLocalNotification() {
  console.log("setLocalNotification")
  AsyncStorage.getItem(CAL)
  .then(JSON.parse)
  .then((data) => {
    if (data === null){
      Permissions.askAsync(Permissions.NOTIFICATIONS)
      .then(({status}) => {
        if (status === 'granted'){
          Notifications.cancelAllScheduledNotificationsAsync()

          let tomorrow = new Date()
          tomorrow.setDate(tomorrow.getDate() + 1)
          tomorrow.setHours(20)
          tomorrow.setMinutes(0)

          Notifications.scheduleLocalNotificationAsync(
            createNotification(),
            {
              time: tomorrow,
              repeat: 'day',
            }
          )

          AsyncStorage.setItem(CAL, JSON.stringify(true))
        }
      })
    }
  })
}

export function clearLocalNotifications() {
  console.log("clearLocalNotifications")
  return AsyncStorage.removeItem(CAL)
  .then(Notifications.cancelAllScheduledNotificationsAsync)
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
