import React, { Fragment } from 'react'
import Menu from './Menu'

const Base = ({ children }) => (
  <Fragment>
    <Menu />
    <main>
      { children }
    </main>
  </Fragment>
)

export default Base