import React from 'react'

import {
  Grid
} from '@material-ui/core'

import InputSearch from './InputSearch/InputSearch'
import LeftHeader from './LeftHeader/LeftHeader'
import NotificationBanner from './NotificationBanner'
import ContactList from './ContactList/ContactList'

const LeftContainer = ({ classes, chats, changeCurrent }) => (
  <Grid item className={classes.leftGrid} style={{ width: '30%' }}>
    <LeftHeader />
    <NotificationBanner />
    <InputSearch />
    <ContactList chats={chats} changeCurrent={changeCurrent} />
  </Grid>
)

export default LeftContainer
