import React, { Component } from 'react'

export default class Counter extends Component {

  state = {
    counter: this.props.defaultValue
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  render() {
    return (
      <div>
        {this.state.counter}
        <button onClick={this.increment}>increment</button>
      </div>
    )
  }
}
