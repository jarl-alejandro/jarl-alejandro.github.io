import React, { Component, Fragment } from 'react'
import Menu from './components/Menu'
import Home from './components/Home'
import Projects from './components/Projects'
import Technology from './components/Technology'

import './App.css'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Menu />
        <main>
          <Home />
          <Projects />
          <Technology />
        </main>
      </Fragment>
    )
  }
}

export default App;
