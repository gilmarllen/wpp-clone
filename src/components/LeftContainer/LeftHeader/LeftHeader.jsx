import React from 'react'

import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import CardHeader from 'custom-components/CardHeader'
import LeftHeaderIcons from './LeftHeader-Icons'

const useStyles = makeStyles({})

const LeftHeader = () => {
  const classes = useStyles()

  return (
    <CardHeader
      classes={classes}
      avatar={(
        <Avatar aria-label="Recipe">G</Avatar>
      )}
      action={(<LeftHeaderIcons />)}
    />
  )
}

export default LeftHeader
