import React, { useState } from 'react'

// import PropTypes from 'prop-types';
import Faker from 'faker/locale/pt_BR'
import {
  BrowserView,
  MobileView
} from 'react-device-detect'

import { withStyles } from '@material-ui/core/styles'
import { Card, Grid } from '@material-ui/core'

import appStyles from './App-styles'
import LeftContainer from './components/LeftContainer/LeftContainer'
import RightContainer from './components/RightContainer'

const generateInitialList = (qtd) => [...Array(qtd).keys()].map((idx) => ({
  id: idx,
  name: Faker.name.firstName(),
  image: Faker.image.avatar(),
  messages: Faker.lorem.sentences().split('.').slice(0, -1).map((m, id) => ({ id, m }))
}))

const chatsIni = {
  list: generateInitialList(70),
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
        messages: it.messages.concat({ m, id: it.messages.length })
      } : it))
    })
  }

  return (
    <>
      <BrowserView>
        <div className={classes.background} />
        <Grid container className={classes.root} justify="center" alignItems="center">
          <Card className={classes.card}>
            <Grid container>
              <LeftContainer classes={classes} {...leftProps} />
              <RightContainer classes={classes} {...rightProps} />
            </Grid>
          </Card>
        </Grid>
      </BrowserView>
      <MobileView style={{
        position: 'absolute', top: '50vh', textAlign: 'center', width: '100%'
      }}
      >
        This content is unavailable on mobile. Please check on a Desktop Web Browser
        {' '}
        <span role="img" aria-label="computer">🖥️</span>
      </MobileView>
    </>
  )
}

// App.propTypes = {
//   classes: PropTypes.shape({
//     root: PropTypes.string.isRequired,
//     background: PropTypes.string.isRequired,
//     card: PropTypes.string.isRequired
//   }).isRequired
// };

export default withStyles(appStyles)(App)
