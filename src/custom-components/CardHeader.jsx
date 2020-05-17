import React from 'react'

import { CardHeader } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  root: {
    flexShrink: '0',
    background: '#ededed',
    padding: '6px 16px'
  },
  action: {
    marginTop: '0'
  }
})

const CardHeaderCustom = (props) => <CardHeader {...props} />

export default withStyles(styles)(CardHeaderCustom)
