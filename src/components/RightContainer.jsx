import React from 'react'
import {
  Grid, Card, CardHeader, CardContent, Avatar, IconButton,
  Paper, Typography, CardActions, List, ListItem
} from '@material-ui/core'

import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'
import AttachFileIcon from '@material-ui/icons/AttachFile'

import backgroundChat from './bg-chat.png'
import InputMessage from './InputMessage'

const RightContainer = ({ classes, chat, sendMessage }) => (
  <Grid item id="rightGrid" className={classes.rightGrid} style={{ width: '70%' }}>
    <Card className={classes.rightCard}>
      <CardHeader
        style={{ zIndex: '2' }}
        className={classes.cardHeader}
        classes={{ action: classes['cardHeader-action'] }}
        avatar={
          <Avatar alt={chat.name} src={chat.image} aria-label="Recipe" className={classes.avatar} />
            }
        action={(
          <>
            <IconButton style={{ backgroundColor: 'transparent', color: '#919191' }}>
              <SearchIcon />
            </IconButton>
            <IconButton
              aria-label="attach"
              style={{
                marginLeft: '6px', transform: 'rotate(50deg)', backgroundColor: 'transparent', color: '#919191'
              }}
            >
              <AttachFileIcon />
            </IconButton>
            <IconButton style={{ marginLeft: '6px', backgroundColor: 'transparent', color: '#919191' }}>
              <MoreVertIcon />
            </IconButton>
          </>
              )}
        title={chat.name}
      />
      <div style={{
        backgroundImage: `url(${backgroundChat})`, opacity: '0.06', position: 'absolute', width: '100%', height: '100%'
      }}
      />
      <CardContent className={classes.chatArea} style={{ background: '#e5ddd5' }}>
        <List>
          {chat.messages.map((message) => (
            <ListItem
              key={message.id}
              className={classes['message-wrapper']}
            >
              <Paper
                className={classes.message}
                elevation={1}
              >
                <Typography className={classes.information} variant="body2">
                  {message.m}
                </Typography>
              </Paper>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions style={{ background: '#f0f0f0', zIndex: '2', padding: '10px' }}>
        <InputMessage sendMessage={sendMessage} />
      </CardActions>
    </Card>
  </Grid>
)

export default RightContainer
