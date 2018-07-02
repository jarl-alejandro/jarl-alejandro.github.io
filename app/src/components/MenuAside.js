import React from 'react'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'

import HomeIcon from '@material-ui/icons/Home'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

import MessageIcon from '@material-ui/icons/Message'
import DnsIcon from '@material-ui/icons/Dns'
import ExploreIcon from '@material-ui/icons/Explore'

const MenuAside = props => (
  <List component="nav">
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
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Perfil" />
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
