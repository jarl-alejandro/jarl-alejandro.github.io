import React, { Component } from 'react'

import Home from './Pages/Home'
import Service from './Pages/Service'
import Experiences from './Pages/Experiences'
import Technology from './Pages/Technology'
import Contact from './Pages/Contact'

import Header from './components/Header'

import './App.scss'

class App extends Component {
  render() {
    return (
      <main className="Main">
        <Header />
        <Home />
        <Service />
        <Experiences />
        <Technology />
        <Contact />
      </main>
    )
  }
}

export default App;
