import React from 'react'

class CardFruit extends React.Component {

  state = {
    quantity: 0
  }

  add = () => this.setState({ quantity: this.state.quantity + 1 })
  
  remove = () => this.setState({ quantity: this.state.quantity - 1 })
  
  clear = () => this.setState({ quantity: 0 })

  render() {

    const hasItems = this.state.quantity > 0 ? '#44fc5f' : this.state.quantity < 0 ? '#ff6d19' : '#c9c9c9'

    const styles = {
      border: '2px solid',
      borderColor: hasItems,
      padding: '1em',
      marginBottom: '5px',
      borderRadius: '5px',
      transition: 'all 400ms ease-out'
    }
      return (
        <div style={ styles }>
          <h3>{this.props.name}</h3>
          <p><small>Quantity: { this.state.quantity }</small></p>
          <button className="button is-link" onClick={ this.add } title="add"> + </button>
          <button className="button is-warning" onClick={ this.remove } title="remove"> - </button>
          <button className="button is-primary" onClick={ this.clear } title="clear"> x </button>
          <p>$ {this.props.price}</p>
          <p><b>Total: </b> ${ (this.state.quantity * this.props.price).toFixed(2) }</p>
          <hr/>
        </div>
      )
  }
}

export default CardFruit
