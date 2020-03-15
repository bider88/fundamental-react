import React from 'react'
import ReactDom from 'react-dom'

// const world = 'world'

// const user = {
//   name: 'Pepe',
//   age: 24,
//   gender: 'male',
//   country: 'MEX'
// }

// const nationality = user => `I'm from ${user.country}`

// const App = <h1>Hello {world} from react</h1>
// const User = <p>My name is {user.name} and I'm {user.age} old.</p>
// const Info = <p>{nationality(user)}</p>

// const Complete = React.createElement('div', null, App, User, Info)

// ReactDom.render(Complete, document.getElementById('root'))



///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

const SimpleCardFruit = () => (
  <div>
    <h3>title</h3>
    <hr/>
    <p>Description...</p>
  </div>
)

const CardFruit = props => {
  console.log('props', props);
  return (
    <div>
      <h3>{props.name}</h3>
      <hr/>
      <p>$ {props.price}</p>
    </div>
  )
}

const ObjectCardFruit = props => {
  console.log('props', props);
  return (
    <div>
      <h3>{props.fruit.name}</h3>
      <hr/>
      <p>$ {props.fruit.price}</p>
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
    <CardFruit name='Kiwi' price={10.1} />
    <ObjectCardFruit fruit={ fruit } />
  </div>
)

// const Complete = React.createElement('div', null, <App/>)

// ReactDom.render(Complete, document.getElementById('root'))
ReactDom.render(<App/>, document.getElementById('root'))