import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Faker from 'faker/locale/pt_BR';

import { withStyles } from '@material-ui/core/styles';
import { Card, Grid } from '@material-ui/core';

import appStyles from './App-styles';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';

const chatsIni = {
  list: [
    {
      id: 1,
      name: Faker.name.firstName(),
      image: Faker.image.avatar(),
      messages: Faker.lorem.sentences().split('.').slice(0, -1)
    },
    {
      id: 2,
      name: Faker.name.firstName(),
      image: Faker.image.avatar(),
      messages: Faker.lorem.sentences().split('.').slice(0, -1)
    },
    {
      id: 3,
      name: Faker.name.firstName(),
      image: Faker.image.avatar(),
      messages: Faker.lorem.sentences().split('.').slice(0, -1)
    },
    {
      id: 4,
      name: Faker.name.firstName(),
      image: Faker.image.avatar(),
      messages: Faker.lorem.sentences().split('.').slice(0, -1)
    },
    {
      id: 5,
      name: Faker.name.firstName(),
      image: Faker.image.avatar(),
      messages: Faker.lorem.sentences().split('.').slice(0, -1)
    },
    {
      id: 6,
      name: Faker.name.firstName(),
      image: Faker.image.avatar(),
      messages: Faker.lorem.sentences().split('.').slice(0, -1)
    },
    {
      id: 7,
      name: Faker.name.firstName(),
      image: Faker.image.avatar(),
      messages: Faker.lorem.sentences().split('.').slice(0, -1)
    }
  ],
  current: 1
};

function App({ classes }) {
  const [chats, setChats] = useState(chatsIni);
  const changeCurrent = (n) => setChats({ ...chats, current: n });

  const leftProps = { chats, changeCurrent };
  const rightProps = {
    chat: chats.list.filter((it) => it.id === chats.current)[0],
    sendMessage: (m) => setChats({
      ...chats,
      list: chats.list.map((it) => (it.id === chats.current ? {
        ...it,
        messages: it.messages.concat(m)
      } : it))
    })
  };

  return (
    <div>
      <div className={classes.background} />
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <Grid container>
              <LeftContainer classes={classes} {...leftProps} />
              <RightContainer classes={classes} {...rightProps} />
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    card: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(appStyles)(App);
