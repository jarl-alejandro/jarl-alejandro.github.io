import React, { Fragment } from 'react'
import Item from './Item'
import data from './data'
import './style.css'
import { Typography } from '@material-ui/core'

const Technology = props => (
  <section className='TechnologyJarl' id='technology'>
    <article className='TechnologyJarl-container'>
      { data.map((item, index) => (
        <Fragment key={index}>
          <Typography variant='title'>{ item.title }</Typography>
          <article className='TechnologyJarl-tech'>
            { item.data.map((tech, index) => (
              <Item item={tech} key={index} />
            )) }
          </article>
        </Fragment>
      )) }
    </article>
  </section>
)

export default Technology
