import React from 'react'

import { IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent'
    },
    color: '#919191'
  }
})

// TODO merge classes (from props + default)
export default (props) => {
  const classes = useStyles()

  return <IconButton {...props} classes={classes} />
}
