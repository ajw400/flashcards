import React, { Component } from 'react'
import { View } from 'react-native'
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { generateId, submitDeck } from '../utils/api'

export default class AddDeck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      cards: []
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ title: e })
  }

  onSubmit() {
    entry = this.state
    key = generateId()
    submitDeck({ entry, key }).then(this.props.navigation.navigate('Decklist', {}))
  }

  render() {
    return (
      <View>
        <FormLabel>Deck Name</FormLabel>
        <FormInput onChangeText={(e) => this.onChange(e)}/>
        <Button
          title="Submit"
          onPress={this.onSubmit}
        />
      </View>
    )
  }
}
