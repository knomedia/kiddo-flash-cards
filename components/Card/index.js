import React from 'react'
import styles from './styles.scss'

class Card extends React.Component {
  constructor () {
    super()
    this.state = {
      flipped: false
    }
  }

  handleClick() {
    this.setState({flipped: !this.state.flipped})
  }

  getContent() {
    let problem = this.props.first + ' x ' + this.props.second
    if (this.state.flipped) {
      let answer = this.props.first * this.props.second
      problem += " = " + answer
    }
    return problem;
  }

  render() {
    return (
      <div className="Card" tabIndex={ 0 } onClick={ this.handleClick.bind(this) }>
        { this.getContent() }
      </div>
    )
  }
}

export default Card;
