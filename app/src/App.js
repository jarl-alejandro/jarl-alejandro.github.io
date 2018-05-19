import React, { Component, Fragment } from 'react'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import './App.css'

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <Header /> */}
        <Home />
        <About />
        <Projects />
        <Contacts />
      </Fragment>
    )
  }
}

export default App;
