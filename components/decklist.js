import React, { Component} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { List, ListItem, Button } from 'react-native-elements'
import { oliveBlack } from '../utils/colors'
import { readDecks } from '../utils/api'

const deck1 = { title: "Deck One", cards: [{ question: "first question", answer: "first answer"}, {question: "second", answer: "answer"}], id: "a1"}
const deck2 = { title: "Deck two", cards: [{ question: "dumb", answer: "huge"}], id: "a2"}
const decks = [deck1, deck2]

export default class Decklist extends Component {
  constructor(props) {
    super(props)

    this.state= {
      decks: []
    }
  }

  componentDidMount(){
    readDecks().then((decks) => {
      this.setState({ decks })})
  }

  componentWillUpdate(){
      readDecks().then((decks) => {
      this.setState({ decks })})
  }

  render() {
    const { navigation } = this.props
    return (
      <View>
      <FlatList
        data={this.state.decks}
        renderItem={({item}) => <ListItem
          key={item.id}
          onPress={() => navigation.navigate('Deck', { deck: item })}
          title={item.title}
          subtitle={`${item.cards.length} cards`}/>}
      />
{/*          <Button
            backgroundColor={oliveBlack}
            title="Add deck"
            onPress={() => navigation.navigate('AddDeck', {})}
          />*/}
      </View>
      )
  }
}
