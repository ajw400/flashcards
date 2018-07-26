import React, { Component } from 'react'
import { View } from 'react-native'
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { submitCard, generateId } from '../utils/api'


export default class AddCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      answer: ''
    }

    this.onChangeAnswer = this.onChangeAnswer.bind(this)
    this.onChangeQuestion = this.onChangeQuestion.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit() {
    entry = this.state
    key = generateId()
    submitCard({ key, entry, deckId: this.props.navigation.state.params.deckId })
      .then((deck) => this.props.navigation.navigate('Deck', { deck }))
  }

  onChangeAnswer(e) {
    this.setState({ answer: e})
  }

  onChangeQuestion(e) {
    this.setState({ question: e})
    console.log(this.state)
  }

  render() {
    return (
      <View>
        <FormLabel>Question</FormLabel>
        <FormInput onChangeText={(e) => this.onChangeQuestion(e)}/>
        <FormLabel>Answer</FormLabel>
        <FormInput onChangeText={(e) => this.onChangeAnswer(e)}/>
        <Button
          onPress={this.onSubmit}
          title="Submit"
        />
      </View>
    )

  }
}
