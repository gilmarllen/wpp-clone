import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
  Avatar, ListItem, ListItemText, Box, Typography
} from '@material-ui/core'

const useStyles = makeStyles({
  avatar: {
    marginRight: '10px',
    width: '50px',
    height: '50px'
  },
  primary: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  secondary: {
    'text-overflow': 'ellipsis',
    overflow: 'hidden',
    'white-space': 'nowrap'
  }
})

const Contact = ({ contact, current, changeCurrent }) => {
  const classes = useStyles()
  return (
    <ListItem
      selected={contact.id === current}
      onClick={() => changeCurrent(contact.id)}
      button
    >
      <Avatar alt={contact.name} src={contact.image} className={classes.avatar} />
      <ListItemText
        classes={{ secondary: classes.secondary }}
        primary={(
          <Box classes={{ root: classes.primary }}>
            <span>{contact.name}</span>
            <Typography variant="subtitle2">
              13:37
            </Typography>
          </Box>
                )}
        secondary={contact.messages[contact.messages.length - 1].m}
      />

    </ListItem>
  )
}

export default Contact
