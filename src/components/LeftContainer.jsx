import React from 'react';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import Message from '@material-ui/icons/Message';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';

import {
  Paper, Typography, Grid, CardHeader, Avatar,
  IconButton, List, ListItem, ListItemText, Box
} from '@material-ui/core';

import InputSearch from './InputSearch';

const LeftContainer = ({ classes, chats, changeCurrent }) => (
  <Grid item className={classes.leftGrid} style={{ width: '30%' }}>
    <CardHeader
      style={{ flexShrink: 0 }}
      className={`${classes.rightBorder} ${classes.cardHeader}`}
      avatar={(
        <Avatar aria-label="Recipe" className={classes.avatar}>
          G
        </Avatar>
              )}
      action={(
        <>
          <IconButton>
            <Message />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </>
            )}
    />
    <Paper className={classes.paper} elevation={0} style={{ flexShrink: 0 }}>
      <Grid container spacing={0}>
        <Grid item sm={2}>
          <IconButton>
            <NotificationsOffIcon />
          </IconButton>
        </Grid>
        <Grid item sm={10}>
          <Typography className={classes.information} variant="subtitle2">
            React (also known as React.js or ReactJS) is a JavaScript
            library[3] for building user interfaces.
          </Typography>
        </Grid>
      </Grid>
    </Paper>
    <InputSearch />
    <Box className={classes['leftList-wrapper']}>
      <List className={classes.leftList}>
        {chats.list.map((item) => (
          <ListItem
            selected={item.id === chats.current}
            onClick={() => changeCurrent(item.id)}
            button
            key={item.id}
          >
            <Avatar alt={item.name} src={item.image} style={{ marginRight: '10px', width: '50px', height: '50px' }} />
            <ListItemText
              classes={{ secondary: classes['leftList-intro'] }}
              primary={item.name}
              secondary={item.messages[item.messages.length - 1].m}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  </Grid>
);

export default LeftContainer;
