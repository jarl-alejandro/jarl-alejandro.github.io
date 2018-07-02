import React from 'react'
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

const MenuAside = props => (
  <List component="nav" className='MenuAsideJarl'>
    <ListItem>
      <ListItemText primary="jarl-alejandro" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <DnsIcon />
      </ListItemIcon>
      <ListItemText primary="Tecnologias" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <ExploreIcon />
      </ListItemIcon>
      <ListItemText primary="Proyectos" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <MessageIcon />
      </ListItemIcon>
      <ListItemText primary="Contáctame" />
    </ListItem>

  </List>
)

export default MenuAside
