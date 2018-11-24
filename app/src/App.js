import React, { Fragment } from 'react'

import Menu from './components/Menu'
import Home from './components/Home'
import Service from './components/Service'
import Technology from './components/Technology'

import './App.css'

const App = () => (
  <Fragment>
    <Menu />
    <Home />
    <section className="Portfolio">
      <section className="PortfolioContent">
        <Service />
        <Technology />
      </section>
    </section>
  </Fragment>
)

export default App