import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { List, ListItem, Button } from 'react-native-elements'
import { green, red, oliveBlack, white } from '../utils/colors'

export default class Deck extends Component {

  render() {
    const { navigation } = this.props
    const deck = navigation.getParam('deck', {})
    const { title, cards, id } = deck

    return (
      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.length}>{cards.length} cards</Text>
          <Button
            backgroundColor={oliveBlack}
            title="Start Quiz"
          />
          <Button
              backgroundColor={green}
              title="Add Card"
         />
      </View>
      )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
    padding: 20,
    margin: 20
  },
  length: {
    fontSize: 20,
    padding: 10
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  }
})
