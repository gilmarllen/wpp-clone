import React from 'react'

import MoreVertIcon from '@material-ui/icons/MoreVert'
import Message from '@material-ui/icons/Message'

import IconButton from 'custom-components/IconButton'

const LeftHeaderIcons = () => (
  <>
    <IconButton>
      <Message />
    </IconButton>
    <IconButton>
      <MoreVertIcon />
    </IconButton>
  </>
)

export default LeftHeaderIcons
