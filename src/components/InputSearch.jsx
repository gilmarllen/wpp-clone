import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';


import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

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
    <Paper className={classes.root} style={{ flexShrink: 0, background: '#f7f7f7', padding: '6px 0' }}>
      <InputBase
        startAdornment={(
          <InputAdornment position="start">
            <IconButton disabled>
              <SearchIcon fontSize="small" />
            </IconButton>
          </InputAdornment>
          )}
        style={{
          margin: '0 10px', borderRadius: '30px', background: 'white', height: '38px', fontSize: '15px', paddingRight: '15px'
        }}
        inputRef={inputRef}
        className={classes.input}
        placeholder="Search or start new chat"
        inputProps={{ 'aria-label': 'search or start new chat' }}
        onChange={(e) => setContent(e.target.value)}
        value={content}
        onKeyDown={keyPressHandler}
      />
    </Paper>
  );
}
