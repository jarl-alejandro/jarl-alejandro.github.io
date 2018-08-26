import React, { Fragment } from 'react'
import Item from './Item'
import data from './data'
import './style.css'
import { Typography } from '@material-ui/core'
import Base from '../Base'

const style = {
  color: {
    color: '#68f8fc'
  }
}

const Technology = props => (
  <Base>
    <section className='TechnologyJarl'>
      <article className='TechnologyJarl-container'>
        { data.map((item, index) => (
          <Fragment key={index}>
            <Typography variant='title' style={style.color}>{ item.title }</Typography>
            <article className='TechnologyJarl-tech'>
              { item.data.map((tech, index) => (
                <Item item={tech} key={index} />
              )) }
            </article>
          </Fragment>
        )) }
      </article>
    </section>
  </Base>
)

export default Technology
