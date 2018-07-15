import React, { Component } from 'react'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'

import HomeIcon from '@material-ui/icons/Home'
import MessageIcon from '@material-ui/icons/Message'
import DnsIcon from '@material-ui/icons/Dns'
import ExploreIcon from '@material-ui/icons/Explore'

import './style.css'

class MenuAside extends Component {
  constructor (props) {
    super(props)
    this.state = {
      setState: false
    }

    this.onScroll = this.onScroll.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.onScroll, false)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScroll, false)
  }

  onScroll () {
    if (window.scrollY >= 60 && !this.state.sticky) {
      this.setState({ sticky: true })
    } else if (window.scrollY < 60 && this.state.sticky) {
      this.setState({ sticky: false })
    }
  }

  render () {
    const sticky = this.state.sticky && 'sticky'
    return (
      <List component='nav' className={`MenuAsideJarl ${sticky}`}>
      <ListItem>
      <ListItemText primary='jarl-alejandro' />
      </ListItem>

      <ListItem button component='a' href='#home'>
      <ListItemIcon>
      <HomeIcon />
      </ListItemIcon>
      <ListItemText primary='Inicio' />
      </ListItem>

      <ListItem button component='a' href='#technology'>
      <ListItemIcon>
      <DnsIcon />
      </ListItemIcon>
      <ListItemText primary='Tecnologias' />
      </ListItem>

      <ListItem button component='a' href='#project'>
      <ListItemIcon>
      <ExploreIcon />
      </ListItemIcon>
      <ListItemText primary='Proyectos' />
      </ListItem>

      <ListItem button component='a' href='#contact'>
      <ListItemIcon>
      <MessageIcon />
      </ListItemIcon>
      <ListItemText primary='Contáctame' />
      </ListItem>
      </List>
    )
  }
}

export default MenuAside
