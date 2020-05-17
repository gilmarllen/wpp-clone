import React from 'react'

import { IconButton } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  root: {
    '&:hover': {
      backgroundColor: 'transparent'
    },
    color: '#919191'
  }
})

const IconButtonCustom = (props) => <IconButton {...props} />

export default withStyles(styles)(IconButtonCustom)
