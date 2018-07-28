import React, { Component } from 'react'
import { Card, Button } from 'react-native-elements'
import { Text, View, StyleSheet } from 'react-native'

class Score extends Component {
  render() {
    const { score, deck } = this.props.navigation.state.params
    return (
      <View style={styles.center}>
        <Text style={styles.text}>Congratulations, your score is {score}!</Text>
        <Button
          title="Restart Quiz"
          onPress={() => this.props.navigation.navigate('Quiz', { deck })}
        />
        <Button
          title="Back to Deck"
          onPress={() => this.props.navigation.navigate('Deck', { deck })}
        />
      </View>
      )
  }
}

styles = StyleSheet.create({
  text: {
    fontSize: 32,
    textAlign: 'center'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
})
export default Score
