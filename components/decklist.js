import React, { Component} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { List, ListItem, Button } from 'react-native-elements'
import { oliveBlack } from '../utils/colors'

const deck1 = { title: "Deck One", cards: [{ question: "first question", answer: "first answer"}], id: "a1"}
const deck2 = { title: "Deck two", cards: [{ question: "dumb", answer: "huge"}], id: "a2"}
const decks = [deck1, deck2]

export default class Decklist extends Component {


  render() {
    const { navigation } = this.props

    return (
      <View>
      <FlatList
        data={decks}
        renderItem={({item}) => <ListItem
          key={item.id}
          onPress={navigation.navigate('Deck', { deck: item })}
          title={item.title}
          subtitle={`${item.cards.length} cards`}/>}
      />
          <Button
            backgroundColor={oliveBlack}
            title="Add deck"
          />
      </View>
      )
  }
}
