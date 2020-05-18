import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { CardActions } from '@material-ui/core'

import InputMessage from './InputMessage'

const useStyle = makeStyles({
  root: {
    background: '#f0f0f0',
    padding: '10px'
  }
})

const RightActions = ({ style, sendMessage }) => {
  const classes = useStyle()
  return (
    <CardActions classes={classes} style={style}>
      <InputMessage sendMessage={sendMessage} />
    </CardActions>
  )
}

export default RightActions
