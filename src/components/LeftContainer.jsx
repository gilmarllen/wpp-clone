import React from 'react';
import PropTypes from 'prop-types';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import Message from '@material-ui/icons/Message';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';

import {
  Paper, Typography, Grid, CardHeader, Avatar,
  IconButton, List, ListItem, ListItemText
} from '@material-ui/core';

import InputSearch from './InputSearch';

const LeftContainer = ({ classes, chats, changeCurrent }) => (
  <Grid item md={3}>
    <CardHeader
      className={classes.rightBorder}
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
    <Paper className={classes.paper} elevation={0}>
      <Grid container spacing={0}>
        <Grid item md={2}>
          <IconButton>
            <NotificationsOffIcon />
          </IconButton>
        </Grid>
        <Grid item md={10}>
          <Typography className={classes.information} variant="subheader">
            React (also known as React.js or ReactJS) is a JavaScript
            library[3] for building user interfaces.
          </Typography>
        </Grid>
      </Grid>
    </Paper>
    <InputSearch />
    <List className={classes.leftList}>
      {chats.list.map((item) => (
        <ListItem
          selected={item.id === chats.current}
          onClick={() => changeCurrent(item.id)}
          button
          key={item.id}
        >
          <Grid item md={1}>
            <Avatar alt={item.name} src={item.image} />
          </Grid>
          <Grid item md={11}>
            <ListItemText classes={{ secondary: classes['leftList-intro'] }} primary={item.name} secondary={item.messages[item.messages.length - 1]} />
          </Grid>
        </ListItem>
      ))}
    </List>
  </Grid>
);

LeftContainer.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    card: PropTypes.string.isRequired
  }).isRequired
};

export default LeftContainer;
