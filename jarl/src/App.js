import React, { Component } from 'react'

import Home from './Pages/Home'
import Experiences from './Pages/Experiences'

import Header from './components/Header'

import './App.scss'

class App extends Component {
  render() {
    return (
      <main className="Main">
        <Header />
        <Home />
        <Experiences />
      </main>
    )
  }
}

export default App;
