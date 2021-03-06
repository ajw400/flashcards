import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, Button } from 'react-native-elements'
import { green, red, oliveBlack, white } from '../utils/colors'


export default class Flashcard extends Component {
  state = {
    flipped: false
  }

  onFlip = () => {
    this.setState(prevState => ({ flipped: !this.state.flipped }))
  }

  onCorrect = () => {
    this.props.next(true)
  }

  onFalse = () => {
    this.props.next(false)
  }

  componentWillReceiveProps() {
    this.setState({ flipped: false })
  }

  render() {
    const { question, answer, deck, id, remaining } = this.props
    const { flipped } = this.state
    return (
      <View style={styles.center}>
        <Card title={deck.title}>
          <Text style={styles.remaining}>{remaining} card(s) remaining</Text>
          <View style={styles.spacerStyle} />
          <Text style={styles.CardText}>{ flipped ? answer : question }</Text>
          <View style = {styles.lineStyle} />
          <View style={styles.spacerStyle} />
          <Button
            backgroundColor={oliveBlack}
            onPress={this.onFlip}
            title="Flip"
          />
          <Button
              backgroundColor={green}
              onPress={this.onCorrect}
              title="Correct"
          />
          <Button
            backgroundColor={red}
            onPress={this.onFalse}
            title="Incorrect"
          />

        </Card>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white
  },
  CardText: {
    fontSize: 40,
    textAlign: 'center',
  },
  remaining: {
    fontSize: 16,
    textAlign: 'center'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
  lineStyle:{
        borderBottomWidth: 0.5,
        borderBottomColor:'black',
        margin:10,
        padding: 20,
    },
  spacerStyle: {
    padding: 20
  }
})
