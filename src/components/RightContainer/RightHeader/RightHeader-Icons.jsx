import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'
import AttachFileIcon from '@material-ui/icons/AttachFile'

import IconButton from 'custom-components/IconButton'

const iconMarginStyle = makeStyles({
  root: {
    marginLeft: '6px'
  }
})

const RightHeaderIcons = () => {
  const iconMargin = iconMarginStyle()
  return (
    <>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <IconButton
        classes={iconMargin}
        aria-label="attach"
        style={{
          transform: 'rotate(50deg)'
        }}
      >
        <AttachFileIcon />
      </IconButton>
      <IconButton
        classes={iconMargin}
      >
        <MoreVertIcon />
      </IconButton>
    </>
  )
}

export default RightHeaderIcons
