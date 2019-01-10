import React from 'react'
import Card from './components/Card'
import styles from './styles.scss'

const TYPES = [2, 3, 4, 5, 6, 7, 8, 9, 10]

class Client extends React.Component {

  constructor() {
    super();
    this.state = {
      current: undefined
    }
  }

  handleButtonClick(num) {
    let value = this.state.current === num ? undefined : num
    this.setState({current: value})
  }

  handleNextClick() {
    this.forceUpdate()
  }

  renderButtons() {
    return TYPES.map((num) => {
      let cn = "Client__NumberButton"
      if (this.state.current === num) {
        cn += " Client__NumberButton__Selected"
      }
      return (
        <button className={ cn } key={ num } onClick={ this.handleButtonClick.bind(this, num) } >
          { num }
        </button>
      )
    })
  }

  getRandom() {
    let range = 11
    return Math.floor(Math.random() * range)
  }

  renderCard(current) {
    if (current) {
      let first = current
      let second = this.getRandom()
      return (
        <Card first={ first } second={ second }  key={ first + second}/>
      )
    }
  }

  renderNext() {
    return (
      <button className="Client__Next" onClick={ this.handleNextClick.bind(this) }>
        NEXT
      </button>
    )
  }

  render() {
    let current = this.state.current || TYPES[Math.floor(Math.random() * TYPES.length)]
    return (
      <div className="Client">
        <h1>Kiddo Flash Cards</h1>
        { this.renderButtons() }
        { this.renderCard(current) }
        { this.renderNext() }
      </div>
    )
  }
}

export default Client;
