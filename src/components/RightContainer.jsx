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
    <CardContent className={[classes.rightContainer, classes.content]}>
      {chat.messages.map((m) => (
        <Paper className={classes.message} elevation={0}>
          <Typography className={classes.information} variant="subheader">
            {m}
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
