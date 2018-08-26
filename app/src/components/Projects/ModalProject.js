import React from 'react'
import {
  Modal,
  Typography
} from '@material-ui/core'

const ModalProject = props => (
  <Modal
    open={props.isModal}
    onClose={props.closeModal}
    className='ModalProject'
  >
    <section className='ModalProject-card'>
      <Typography variant='title'>{ props.data.title }</Typography>
      <Typography variant='subheading'>{ props.data.descripcion }</Typography>
      <article className='ModalProject-slider'>
        { props.data.images.map((item, index) => (
          <img src={item} key={index} />
        )) }
      </article>
    </section>
  </Modal>
)

export default ModalProject
