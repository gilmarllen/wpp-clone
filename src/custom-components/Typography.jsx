import React from 'react'

import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  root: {
    fontSize: '0.875rem',
    fontFamily: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    letterSpacing: 'inherit'
  }
})

const TypographyCustom = (props) => <Typography {...props} />

export default withStyles(styles)(TypographyCustom)
