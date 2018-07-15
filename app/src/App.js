import React, { Component } from 'react'
import Menu from './components/Menu'
import Home from './components/Home'
import Projects from './components/Projects'
import Technology from './components/Technology'

import './App.css'

class App extends Component {
  render() {
    return (
      <section className='JarlApp'>
        <Menu />
        <main className='MainContainer'>
          <Home />
          <Projects />
          <Technology />
        </main>
      </section>
    )
  }
}

export default App;
