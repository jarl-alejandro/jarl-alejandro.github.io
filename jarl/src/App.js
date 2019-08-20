import React, { Component } from 'react'

import About from './Pages/About'
import Service from './Pages/Service'
import Portfolio from './Pages/Portfolio'

import './App.scss'

class App extends Component {
  render() {
    return (
      <main className="Main">
        <About />
        <Service />
        <Portfolio />
      </main>
    )
  }
}

export default App;
