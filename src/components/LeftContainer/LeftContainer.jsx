import React from 'react'

import {
  Paper, Typography, Grid, Avatar, IconButton, List, ListItem, ListItemText, Box
} from '@material-ui/core'

import NotificationsOffIcon from '@material-ui/icons/NotificationsOff'

import InputSearch from './InputSearch/InputSearch'
import LeftHeader from './LeftHeader/LeftHeader'

const LeftContainer = ({ classes, chats, changeCurrent }) => (
  <Grid item className={classes.leftGrid} style={{ width: '30%' }}>
    <LeftHeader />
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
)

export default LeftContainer
