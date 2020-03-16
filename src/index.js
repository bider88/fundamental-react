import React from 'react'
import ReactDom from 'react-dom'
import './styles.scss'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// REACT CORE
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
const world = 'world'

const user = {
  name: 'Pepe',
  age: 24,
  gender: 'male',
  country: 'MEX'
}

const nationality = user => `I'm from ${user.country}`

const App = <h1>Hello {world} from react</h1>
const User = <p>My name is {user.name} and I'm {user.age} old.</p>
const Info = <p>{nationality(user)}</p>

const Complete = React.createElement('div', null, App, User, Info)

ReactDom.render(Complete, document.getElementById('root'))
*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// USING COMPONENTS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
const SimpleCardFruit = () => (
  <div>
    <h3>title</h3>
    <p>Description...</p>
    <hr/>
  </div>
)

const CardFruit = props => {
  console.log('props', props);
  return (
    <div>
      <h3>{props.name}</h3>
      <p>$ {props.price}</p>
      <hr/>
    </div>
  )
}

const ObjectCardFruit = props => {
  console.log('props', props);
  return (
    <div>
      <h3>{props.fruit.name}</h3>
      <p>$ {props.fruit.price}</p>
      <hr/>
    </div>
  )
}

const fruit = {
  name: 'banana',
  price: 4.6
}

const App = () => (
  <div>
    <SimpleCardFruit/>
    <CardFruit name={'Cocoa'} price={12.3} />
    <CardFruit name='Strawberry' price={7.9} />
    <CardFruit name='Orange' price={10.1} />
    <ObjectCardFruit fruit={ fruit } />
    <br/>
    <button className="button is-danger is-outlined">Hello</button>
  </div>
)

ReactDom.render(<App/>, document.getElementById('root'))
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// COMPONENTS USING CLASSES
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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


const App = () => (
  <div>
    <CardFruit name={'Cocoa'} price={12.3} />
    <CardFruit name='Strawberry' price={7.9} />
    <CardFruit name='Orange' price={10.1} />
    <br/>
    <button className="button is-danger is-outlined">Hello</button>
  </div>
)

ReactDom.render(<App/>, document.getElementById('root'))

