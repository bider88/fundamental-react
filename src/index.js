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

const CardFruit = () => (
  <div>
    <h3>title</h3>
    <hr/>
    <p>Description...</p>
  </div>
)

const App = () => (
  <CardFruit/>
)

// const Complete = React.createElement('div', null, <App/>)

// ReactDom.render(Complete, document.getElementById('root'))
ReactDom.render(<App/>, document.getElementById('root'))