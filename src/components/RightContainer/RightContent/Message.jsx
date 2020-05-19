import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
  Paper, ListItem, Box
} from '@material-ui/core'

import { BsCheckAll } from 'react-icons/bs'

import Typography from 'custom-components/Typography'

const useStyle = makeStyles({
  wrapper: {
    'padding-top': '2px',
    'padding-bottom': '2px',
    justifyContent: (params) => (params.my ? 'flex-end' : 'flex-start')
  },
  message: {
    background: (params) => (params.my ? '#dcf8c6' : '#ffffff'),
    // padding: '0px 10px',
    display: 'flex',
    'max-width': '60%'
  },
  text: {
    // width: 'fit-content'
    padding: 10
  },
  footer: {
    marginLeft: '15px',
    display: 'flex',
    paddingRight: '10px',
    paddingBottom: '3px',
    alignItems: 'flex-end'
  },
  time: {
    color: '#00000073',
    fontSize: '0.67rem',
    margin: '0px 5px'
  },
  checkStatus: {
    color: '#4fc3f7'
  }
})

const Message = ({ my, message }) => {
  const classes = useStyle({ my })
  return (
    <ListItem
      className={classes.wrapper}
    >
      <Paper
        className={classes.message}
        elevation={1}
      >
        <Typography className={classes.text} variant="body2">
          {message.m}
        </Typography>
        <Box className={classes.footer}>
          <Typography className={classes.time}>
            {message.time}
          </Typography>
          <BsCheckAll className={classes.checkStatus} />
        </Box>
      </Paper>
    </ListItem>
  )
}

export default Message
