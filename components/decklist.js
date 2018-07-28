import React, { Component} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { List, ListItem, Button } from 'react-native-elements'
import { oliveBlack } from '../utils/colors'
import { readDecks } from '../utils/api'
import { NavigationEvents } from 'react-navigation'

const deck1 = { title: "Deck One", cards: [{ question: "first question", answer: "first answer"}, {question: "second", answer: "answer"}], id: "a1"}
const deck2 = { title: "Deck two", cards: [{ question: "dumb", answer: "huge"}], id: "a2"}
const decks = [deck1, deck2]

class Decklist extends Component {
  constructor(props) {
    super(props)

    this.state= {
      decks: [],
      extra: false
    }
  }

  static navigationOptions = {
    title: "Deck List"
  }

  componentDidMount(){
    readDecks().then((decks) => {
      this.setState({ decks })})
  }

  componentWillUpdate(){
      readDecks().then((decks) => {
      this.setState({ decks, extra: !this.state.extra })})
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={{flex: 1, padding: 0, margin: 0}}>
      <NavigationEvents
        onWillFocus={payload => console.log('will focus',payload)} />
      <FlatList
        style={{flex: 1, padding: 0, margin: 0}}
        data={this.state.decks}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => <ListItem
          onPress={() => navigation.navigate('Deck', { deck: item })}
          title={item.title}
          extraData={this.state.extra}
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

export default Decklist
