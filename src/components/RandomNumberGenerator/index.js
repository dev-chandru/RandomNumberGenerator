// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onClickingButton = () => {
    this.setState({
      count: Math.ceil(Math.random() * 100),
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="main-bg-container">
        <div className="cards-container">
          <h1 className="main-heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="generate-button"
            type="button"
            onClick={this.onClickingButton}
          >
            Generate
          </button>
          <p className="random-count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
