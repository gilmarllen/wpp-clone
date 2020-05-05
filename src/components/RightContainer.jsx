import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import {
  Grid, Card, CardHeader, CardContent, Avatar, IconButton,
  Paper, Typography, CardActions, List, ListItem
} from '@material-ui/core';

import InputMessage from './InputMessage';

const RightContainer = ({ classes, chat, sendMessage }) => (
  <Grid item className={classes.rightGrid} style={{ width: '70%' }}>
    <Card className={classes.rightCard}>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Avatar alt={chat.name} src={chat.image} aria-label="Recipe" className={classes.avatar} />
            }
        action={(
          <>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </>
              )}
        title={chat.name}
      />
      <CardContent className={classes.chatArea}>
        <List>
          {chat.messages.map((message) => (
            <ListItem
              key={message.id}
              className={classes['message-wrapper']}
            >
              <Paper
                className={classes.message}
                elevation={0}
              >
                <Typography className={classes.information} variant="body2">
                  {message.m}
                </Typography>
              </Paper>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions>
        <InputMessage sendMessage={sendMessage} />
      </CardActions>
    </Card>
  </Grid>
);

export default RightContainer;
