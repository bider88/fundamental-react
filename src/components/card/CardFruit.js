import React from 'react'

class CardFruit extends React.Component {

  state = {
    quantity: 0
  }

  add = () => this.setState({ quantity: this.state.quantity + 1 })
  
  remove = () => this.setState({ quantity: this.state.quantity - 1 })
  
  clear = () => this.setState({ quantity: 0 })

  render() {
      return (
        <div>
          <h3>{this.props.name}</h3>
          <p><small>Quantity: { this.state.quantity }</small></p>
          <button className="button is-link" onClick={ this.add } title="add"> + </button>
          <button className="button is-warning" onClick={ this.remove } title="remove"> - </button>
          <button className="button is-primary" onClick={ this.clear } title="clear"> x </button>
          <p>$ {this.props.price}</p>
          <hr/>
        </div>
      )
  }
}

export default CardFruit
