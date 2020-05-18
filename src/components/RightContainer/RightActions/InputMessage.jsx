import React, { useState, useRef } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'

import IconButton from 'custom-components/IconButton'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '0px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius: '21px'
  },
  inputBase: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 7
  },
  icon: {
    fontSize: '1.75rem'
  }
}))

export default function CustomizedInputBase({ sendMessage }) {
  const classes = useStyles()
  const [content, setContent] = useState('')
  const inputRef = useRef(null)

  const sendMessageHandler = () => {
    if (content.length) {
      sendMessage(content)
      setContent('')
    }
    inputRef.current.focus()
  }

  const keyPressHandler = (e) => {
    if (e.keyCode === 13) sendMessageHandler()
  }

  return (
    <>
      <IconButton className={classes.iconButton}>
        <InsertEmoticonIcon className={classes.icon} />
      </IconButton>
      <Paper className={classes.paper} square elevation={0}>
        <InputBase
          inputRef={inputRef}
          className={classes.inputBase}
          placeholder="Type a message"
          inputProps={{ 'aria-label': 'Type a message' }}
          onChange={(e) => setContent(e.target.value)}
          value={content}
          onKeyDown={keyPressHandler}
        />
      </Paper>
      <IconButton className={classes.iconButton}>
        <MicIcon className={classes.icon} />
      </IconButton>
    </>
  )
}

// TODO Scroll chat to bottom when send message
