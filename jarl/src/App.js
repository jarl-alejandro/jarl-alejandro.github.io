import React, { Component } from 'react'

import Home from './Pages/Home'

import Header from './components/Header'

import './App.scss'

class App extends Component {
  render() {
    return (
      <main className="Main">
        <Header />
        <Home />
      </main>
    )
  }
}

export default App;
