import React from 'react'
import styles from './CardFruit.module.scss'

class CardFruit extends React.Component {

  state = {
    quantity: 0
  }

  add = () => this.setState({ quantity: this.state.quantity + 1 })
  
  remove = () => this.setState({ quantity: this.state.quantity - 1 })
  
  clear = () => this.setState({ quantity: 0 })

  render() {
    const cardFruitStyle = `${styles['card-fruit']} ${this.state.quantity > 0 ? styles['has-items'] : 
                            this.state.quantity < 0 ? styles['error-items'] : styles['no-items']}`

      return (
        <div className={ cardFruitStyle }>
          <h3>{this.props.name}</h3>
          <p><small>Quantity: { this.state.quantity }</small></p>
          <div className="buttons">
            <button className="button is-link is-light" onClick={ this.add } title="add"> <b>+</b> </button>
            <button className="button is-warning is-light" onClick={ this.remove } title="remove"> <b>-</b> </button>
            <button className="button is-primary is-light" onClick={ this.clear } title="clear"> <b>x</b> </button>
          </div>
          <p>$ {this.props.price}</p>
          <p><b>Total: </b> ${ (this.state.quantity * this.props.price).toFixed(2) }</p>
        </div>
      )
  }
}

export default CardFruit
