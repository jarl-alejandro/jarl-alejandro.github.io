import React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core'

const Item = ({ item, classes }) => (
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
