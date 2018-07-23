import React from 'react'
import { View, Platform } from 'react-native'
import { TabNavigator, createStackNavigator } from 'react-navigation'
import { blackOlive, white } from './utils/colors'
import { Constants } from 'expo'
import Flashcard from './components/flashcard'
import Decklist from './components/decklist'
import Deck from './components/deck'
import Quiz from './components/quiz'
import Score from './components/score'


const cards = [
{
  question: "who am I?",
  answer: "Andrew"
},
{
  question: "is this fun?",
  answer: "yeah, actually!"
}
]

const deck = "this deck"

const Stack = createStackNavigator({
  Decklist: {
    screen: Decklist
  },
  Deck: {
    screen: Deck
  }
},
{
  initialRouteName: "Decklist"
})

export default class App extends React.Component {
  render() {
    return (
      <Stack />
    )
  }
}


