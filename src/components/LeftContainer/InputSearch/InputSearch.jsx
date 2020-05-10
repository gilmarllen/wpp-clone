import React, { useState, useRef } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'

import SearchIconAdornment from './SearchIconAdornment'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    flexShrink: 0,
    background: '#f7f7f7',
    padding: '6px 0'
  },
  input: {
    marginLeft: '8px',
    flex: 1,
    margin: '0 10px',
    borderRadius: '30px',
    background: 'white',
    height: '38px',
    fontSize: '15px',
    paddingRight: '15px'
  }
})

// TODO Check the sendMesage usage
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
    <Paper className={classes.root} square>
      <InputBase
        startAdornment={(<SearchIconAdornment />)}
        inputRef={inputRef}
        className={classes.input}
        placeholder="Search or start new chat"
        inputProps={{ 'aria-label': 'search or start new chat' }}
        onChange={(e) => setContent(e.target.value)}
        value={content}
        onKeyDown={keyPressHandler}
      />
    </Paper>
  )
}
