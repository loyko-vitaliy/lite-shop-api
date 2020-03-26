import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const ListItemLink = ({ primary, children, ...other }) => (
  <li>
    <ListItem button {...other}>
      <ListItemText primary={primary} />
      {children}
    </ListItem>
  </li>
)

export default ListItemLink
