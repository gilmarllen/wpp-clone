import React from 'react'
import {
  Avatar
} from '@material-ui/core'

import CardHeader from 'custom-components/CardHeader'
import RightHeaderIcons from './RightHeader-Icons'

const RightHeader = ({ chat, style }) => (
  <CardHeader
    style={style}
    avatar={
      <Avatar alt={chat.name} src={chat.image} aria-label="Recipe" />
    }
    action={(<RightHeaderIcons />)}
    title={chat.name}
  />
)

export default RightHeader
