import React from 'react'

const Item = props => (
  <article className='ProjectItem'>
    <div className='ProjectItem-image'></div>
    <h3 className='ProjectItem-title'>{props.name}</h3>
  </article>
)

export default Item