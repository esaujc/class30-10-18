import React, { Component } from 'react'

class Card extends Component {

  handleDelete = () => {
    this.props.onDelete(this.props.index)
  }

  render() {
    return (
      <div>
        {this.props.data.name}
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}
export default Card;