import React, { Component } from 'react'
import { View } from 'react-native'
import Flashcard from './flashcard'
import { clearLocalNotifications, setLocalNotification } from '../utils/api'

export default class Quiz extends Component{
  constructor(props) {
    super(props)
    this.state = {
      cardIndex: 0,
      right: 0,
      wrong: 0,
      deck: {}
    }

    this.next = this.next.bind(this)
    this.setIndex = this.setIndex.bind(this)
  }

  setIndex() {
    const { deck } = this.props.navigation.state.params
    const i = this.state.cardIndex + 1
    if (i < this.state.deck.cards.length) {
      this.setState({cardIndex: i})
    } else {
      score = this.state.right.toFixed(2) * 100 / this.state.deck.cards.length
      this.props.navigation.navigate('Score', { score, deck })
      this.setState({
        cardIndex: 0,
        right: 0,
        wrong: 0,
        deck: deck
      })
      clearLocalNotifications()
      .then(setLocalNotification())
    }
  }

  next(correct) {
    if (correct) {
      right = this.state.right + 1
      this.setState({ right: right }, this.setIndex)
    } else {
      wrong = this.state.wrong + 1
      this.setState({ wrong: wrong }, this.setIndex)
    }
  }

  componentDidMount() {
    this.setState({ deck: this.props.navigation.state.params.deck })
  }

  render() {
    const { navigation } = this.props
    const { deck } = navigation.state.params
    const { cardIndex } = this.state
    const { cards } = deck
    const card = cards[cardIndex]

    return (
      <Flashcard
        question={card.question}
        answer={card.answer}
        deck={deck}
        id={cardIndex}
        next={this.next}
        remaining={ cards.length - cardIndex }
      />
    )
  }
}
