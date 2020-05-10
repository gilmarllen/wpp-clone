import React from 'react'

import { CardHeader, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import LeftHeaderIcons from './LeftHeader-Icons'

const useStyles = makeStyles({
  rightBorder: {
    borderRight: 'solid #d0D0D0 1px',
    background: '#ededed'
  },
  cardHeader: {
    background: '#ededed',
    padding: '6px 16px'
  }
})

const cardHeaderStyles = makeStyles({
  root: {
    flexShrink: '0'
  },
  action: {
    marginTop: '0'
  }
})

const LeftHeader = () => {
  const classes = useStyles()

  return (
    <CardHeader
      className={`${classes.rightBorder} ${classes.cardHeader}`}
      classes={cardHeaderStyles()}
      avatar={(
        <Avatar aria-label="Recipe">G</Avatar>
      )}
      action={(<LeftHeaderIcons />)}
    />
  )
}

export default LeftHeader
