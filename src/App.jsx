import React, { useState } from 'react'

// import PropTypes from 'prop-types';
import Faker from 'faker/locale/pt_BR'
import {
  BrowserView,
  MobileView
} from 'react-device-detect'

import { withStyles } from '@material-ui/core/styles'
import { Card, Grid } from '@material-ui/core'

import { formatTime } from './util/util'
import appStyles from './App-styles'
import LeftContainer from './components/LeftContainer/LeftContainer'
import RightContainer from './components/RightContainer/RightContainer'


const current = new Date()

const generateInitialList = (qtd) => [...Array(qtd).keys()].map((idx) => ({
  id: idx,
  name: Faker.name.firstName(),
  image: Faker.image.avatar(),
  messages: Faker.lorem.sentences().split('.').slice(0, -1).map((m, id) => ({ id, m, time: formatTime(current) }))
}))

const chatsIni = {
  list: generateInitialList(20),
  current: 0
}

function App({ classes }) {
  const [chats, setChats] = useState(chatsIni)
  const changeCurrent = (n) => setChats({ ...chats, current: n })

  const leftProps = { chats, changeCurrent }
  const rightProps = {
    chat: chats.list.filter((it) => it.id === chats.current)[0],
    sendMessage: (m) => setChats({
      ...chats,
      list: chats.list.map((it) => (it.id === chats.current ? {
        ...it,
        messages: it.messages.concat({ m, id: it.messages.length, time: formatTime(new Date()) })
      } : it))
    })
  }

  return (
    <>
      <AppBrowser leftProps={leftProps} rightProps={rightProps} classes={classes} />
      <AppMobile classes={classes} />
    </>
  )
}

const AppBrowser = ({ classes, leftProps, rightProps }) => (
  <BrowserView>
    <div className={classes.background} />
    <Grid container className={classes.root} justify="center" alignItems="center">
      <Card className={classes.card}>
        <Grid container>
          <LeftContainer {...leftProps} />
          <RightContainer {...rightProps} />
        </Grid>
      </Card>
    </Grid>
  </BrowserView>
)

const AppMobile = ({ classes }) => (
  <MobileView className={classes.mobileView}>
    This content is unavailable on mobile. Please check on a Desktop Web Browser
    {' '}
    <span role="img" aria-label="computer">🖥️</span>
  </MobileView>
)

// App.propTypes = {
//   classes: PropTypes.shape({
//     root: PropTypes.string.isRequired,
//     background: PropTypes.string.isRequired,
//     card: PropTypes.string.isRequired
//   }).isRequired
// };

export default withStyles(appStyles)(App)
