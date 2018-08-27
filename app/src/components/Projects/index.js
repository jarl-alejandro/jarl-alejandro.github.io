import React, { Component } from 'react'

import Item from './Item'
import ModalProject from './ModalProject'
import Base from '../Base'

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
    /*
    this.setState({
      isModal: true,
      data: item
    })
    */
  }

  closeModal () {
    this.setState({ isModal: false, data: { images: [] } })
  }

  render () {
    return (
      <Base>
        <section className='Project'>
          <ModalProject
            isModal={this.state.isModal}
            data={this.state.data}
            closeModal={this.closeModal}
          />
          <h1 className='Project-title'>Proyectos</h1>
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
      </Base>
    )
  }
}

export default Project
