import React from 'react'
import {
  Grid, Card, CardContent,
  Paper, Typography, CardActions, List, ListItem
} from '@material-ui/core'


import backgroundChat from './bg-chat.png'
import InputMessage from './InputMessage'
import RightHeader from './RightHeader/RightHeader'

const Background = () => (
  <div style={{
    backgroundImage: `url(${backgroundChat})`,
    opacity: '0.06',
    position: 'absolute',
    width: '100%',
    height: '100%'
  }}
  />
)

const RightContainer = ({ classes, chat, sendMessage }) => (
  <Grid item id="rightGrid" className={classes.rightGrid} style={{ width: '70%' }}>
    <Card className={classes.rightCard}>
      <RightHeader chat={chat} style={{ zIndex: '2' }} />
      <Background />

      <CardContent className={classes.chatArea} style={{ background: '#e5ddd5' }}>
        <List>
          {chat.messages.map((message) => (
            <ListItem
              key={message.id}
              className={classes['message-wrapper']}
            >
              <Paper
                className={classes.message}
                elevation={1}
              >
                <Typography className={classes.information} variant="body2">
                  {message.m}
                </Typography>
              </Paper>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions style={{ background: '#f0f0f0', zIndex: '2', padding: '10px' }}>
        <InputMessage sendMessage={sendMessage} />
      </CardActions>
    </Card>
  </Grid>
)

export default RightContainer
