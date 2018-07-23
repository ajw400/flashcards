import React, { Component } from 'react'
import Flashcard from './flashcard'

export default class Quiz extends Component{
  constructor(props) {
    super(props)
    this.state = {
      cardIndex: 0,
      right: 0,
      wrong: 0
    }

    this.next = this.next.bind(this)
  }

  next(correct) {
    if (correct) {
      this.setState({ right: this.state.right + 1 })
    } else {
      this.setState({ wrong: this.state.wrong + 1 })
    }
    i = this.state.cardIndex + 1
    if (i < this.props.cards.length) {
      this.setState({cardIndex: i})
    } else {
      console.log("finished!")
    }
  }

  render() {
    const { cards, deck } = this.props
    const { cardIndex } = this.state
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
