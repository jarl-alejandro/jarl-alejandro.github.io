import React from 'react'

const Item = ({ item }) => (
  <article className='TechnologyJarl-item'>
    <div className='TechnologyJarl-item-container' style={item.style}>
      <img src={ item.image } alt={ item.name } className='TechnologyJarl-media' />
    </div>
  </article>
)

export default Item
