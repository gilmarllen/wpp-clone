import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

import IconButton from '@material-ui/core/IconButton';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: '2px 4px',
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
}));

export default function CustomizedInputBase({ sendMessage }) {
  const classes = useStyles();
  const [content, setContent] = useState('');
  const inputRef = useRef(null);

  const sendMessageHandler = () => {
    if (content.length) {
      sendMessage(content);
      setContent('');
    }
    inputRef.current.focus();
  };

  const keyPressHandler = (e) => {
    if (e.keyCode === 13) sendMessageHandler();
  };

  return (
    <Paper className={classes.root} style={{ flexShrink: 0 }}>
      <IconButton className={classes.iconButton} aria-label="attach">
        <AttachFileIcon />
      </IconButton>
      <InputBase
        inputRef={inputRef}
        className={classes.input}
        placeholder="Digite aqui"
        inputProps={{ 'aria-label': 'digite aqui' }}
        onChange={(e) => setContent(e.target.value)}
        value={content}
        onKeyDown={keyPressHandler}
      />
      <IconButton className={classes.iconButton} aria-label="send" onClick={sendMessageHandler}>
        <SendIcon />
      </IconButton>
    </Paper>
  );
}
