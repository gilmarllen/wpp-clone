import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
  Grid, Card, CardHeader, CardContent, Avatar, IconButton, Paper, Typography, CardActions, List, ListItem
} from '@material-ui/core';

import InputMessage from './InputMessage';

const RightContainer = ({ classes, chat, sendMessage }) => (
  <Grid item md={9} className={classes.rightGrid}>
    <Card className={classes.rightCard}>
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
