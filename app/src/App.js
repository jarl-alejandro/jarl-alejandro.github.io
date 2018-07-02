import React, { Component } from 'react'
import MenuAside from './components/Menu'
import Home from './components/Home'
import Technology from './components/Technology'

import './App.css'

class App extends Component {
  render() {
    return (
      <section className='JarlApp'>
        <MenuAside />
        <main className='MainContainer'>
          <Home />
          <Technology />
        </main>
      </section>
    )
  }
}

export default App;
