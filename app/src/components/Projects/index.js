import React, { Component } from 'react'
import { Typography } from '@material-ui/core'

import Item from './Item'
import ModalProject from './ModalProject'

import data from './data'
import './style.css'

class Project extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isModal: false,
      data: {
        images: []
      }
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal (item) {
    this.setState({
      isModal: true,
      data: item
    })
  }

  closeModal () {
    this.setState({ isModal: false, data: { images: [] } })
  }

  render () {
    return (
      <section className='Project' id='project'>
        <ModalProject
          isModal={this.state.isModal}
          data={this.state.data}
          closeModal={this.closeModal}
        />
        <Typography variant='title'>Proyectos</Typography>
        <section className='ProjectSection'>
          { data.map(item => (
            <Item
              openModal={this.openModal}
              item={item}
              key={item.id}
            />
          ))}
        </section>
      </section>
    )
  }
}

export default Project
