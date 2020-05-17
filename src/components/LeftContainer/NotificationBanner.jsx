import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
  Paper, Typography, Grid
} from '@material-ui/core'

import NotificationsOffIcon from '@material-ui/icons/NotificationsOff'

import IconButton from 'custom-components/IconButton'

const useStyles = makeStyles({
  paper: {
    background: '#9de1fe',
    padding: 20,
    flexShrink: 0
  },
  information: {
    color: '#444'
  }
})

const NotificationBanner = () => {
  const classes = useStyles()
  return (
    <Paper className={classes.paper} elevation={0} square>
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
  )
}

export default NotificationBanner
