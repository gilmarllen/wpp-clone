import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
  Grid, CardHeader, CardContent, Avatar, IconButton, Paper, Typography
} from '@material-ui/core';

import InputMessage from './InputMessage';

const RightContainer = ({ classes, chat, sendMessage }) => (
  <Grid className={classes.heightAdjust} item md={9}>
    <CardHeader
      avatar={
        <Avatar alt={chat.name} src={chat.image} aria-label="Recipe" className={classes.avatar} />
            }
      action={(
        <IconButton>
          <MoreVertIcon />
        </IconButton>
              )}
      title={chat.name}
      classes={{ root: classes.cardHeader }}
    />
    <CardContent className={`${classes.rightContainer} ${classes.content}`}>
      {chat.messages.map((message) => (
        <Paper
          className={classes.message}
          elevation={0}
          key={message.id}
        >
          <Typography className={classes.information} variant="body2">
            {message.m}
          </Typography>
        </Paper>
      ))}
    </CardContent>
    <CardHeader
      subheader={<InputMessage sendMessage={sendMessage} />}
      classes={{ root: classes.cardHeader }}
    />
  </Grid>
);

export default RightContainer;
