import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
  Paper, Typography, ListItem
} from '@material-ui/core'


const useStyle = makeStyles({
  wrapper: {
    'padding-top': '2px',
    'padding-bottom': '2px',
    justifyContent: (params) => (params.my ? 'flex-end' : 'flex-start')
  },
  message: {
    background: (params) => (params.my ? '#dcf8c6' : '#ffffff'),
    padding: 10,
    'max-width': '50%',
    width: 'fit-content'
  }
})

const Message = ({ my, content }) => {
  const classes = useStyle({ my })
  return (
    <ListItem
      className={classes.wrapper}
    >
      <Paper
        className={classes.message}
        elevation={1}
      >
        <Typography variant="body2">
          {content}
        </Typography>
      </Paper>
    </ListItem>
  )
}

export default Message
