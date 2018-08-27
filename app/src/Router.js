import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './components/Home'
import Technology from './components/Technology'
import Projects from './components/Projects'
import Service from './components/Service'

export default () =>  (
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/proyectos' exact component={Projects} />
      <Route path='/tecnologias' exact component={Technology} />
      <Route path='/servicios' exact component={Service} />
    </Switch>
  </Router>
)