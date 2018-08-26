import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './components/Home'
import Technology from './components/Technology'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default () =>  (
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/proyectos' exact component={Projects} />
      <Route path='/tecnologias' exact component={Technology} />
      <Route path='/contacteme' exact component={Contact} />
    </Switch>
  </Router>
)