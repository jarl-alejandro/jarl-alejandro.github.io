import React from 'react'
import { Typography } from '@material-ui/core'

const Item = ({ item }) => (
  <article className='TechnologyJarl-item'>
    <div className='TechnologyJarl-item-container'>
      <img src={ item.image } alt={ item.name } className='TechnologyJarl-media' />
      <Typography
        variant='subheading'
        className="TechnologyJarl-name"
        component="p"
      >{ item.name }</Typography>
    </div>
  </article>
)

export default Item
