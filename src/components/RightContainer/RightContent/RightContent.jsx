import React from 'react'
import {
  CardContent, List
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Message from './Message'

const useStyle = makeStyles({
  root: {
    'overflow-y': 'scroll',
    'flex-direction': 'column-reverse',
    display: 'flex',
    flex: '1',
    height: '100%',
    background: '#e5ddd5'
  }
})

const RightContent = ({ chat }) => {
  const classes = useStyle()
  return (
    <CardContent classes={classes}>
      <List>
        {chat.messages.map((message) => (
          <Message
            key={message.id}
            my
            content={message.m}
          />
        ))}
      </List>
    </CardContent>
  )
}

export default RightContent
