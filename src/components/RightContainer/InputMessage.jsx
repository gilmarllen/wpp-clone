import React, { useState, useRef } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'

import IconButton from 'custom-components/IconButton'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
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
      <IconButton style={{ padding: '7px' }}>
        <InsertEmoticonIcon style={{ fontSize: '1.75rem' }} />
      </IconButton>
      <Paper className={classes.root} square elevation={0} style={{ height: '100%', borderRadius: '21px' }}>
        <InputBase
          inputRef={inputRef}
          className={classes.input}
          placeholder="Type a message"
          inputProps={{ 'aria-label': 'Type a message' }}
          onChange={(e) => setContent(e.target.value)}
          value={content}
          onKeyDown={keyPressHandler}
        />
      </Paper>
      <IconButton style={{ padding: '7px' }}>
        <MicIcon style={{ fontSize: '1.75rem' }} />
      </IconButton>
    </>
  )
}

// TODO Scroll chat to bottom when send message
