import React from 'react'
import CardFruit from './components/CardFruit'

const App = () => (
  <div>
    <CardFruit name={'Cocoa'} price={12.3} />
    <CardFruit name='Strawberry' price={7.9} />
    <CardFruit name='Orange' price={10.1} />
    <br/>
    <button className="button is-danger is-outlined">Hello</button>
  </div>
)

export default App
