import React, { Component } from 'react'
import { Card, Button } from 'react-native-elements'
import { Text, View, StyleSheet } from 'react-native'

const Score = ({ score }) => {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Congratulations, your score is {score}!</Text>
      <Button
        title="Continue"
      />
    </View>
    )
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
