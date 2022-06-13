import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displaytext = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Count{count}</h1>
          <p className="description">Count is {displaytext}</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="paragraph">
            *Increase by Random Number Between 0 and 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
