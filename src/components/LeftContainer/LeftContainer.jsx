import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import InputSearch from './InputSearch/InputSearch'
import LeftHeader from './LeftHeader/LeftHeader'
import NotificationBanner from './NotificationBanner'
import ContactList from './ContactList/ContactList'

const useStyles = makeStyles({
  grid: {
    width: '30%',
    height: '100%',
    display: 'flex',
    'flex-direction': 'column'
  }
})

const LeftContainer = ({ chats, changeCurrent }) => {
  const classes = useStyles()
  return (
    <Grid item className={classes.grid}>
      <LeftHeader />
      <NotificationBanner />
      <InputSearch />
      <ContactList chats={chats} changeCurrent={changeCurrent} />
    </Grid>
  )
}

export default LeftContainer
