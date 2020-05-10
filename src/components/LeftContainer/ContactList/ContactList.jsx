import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
  List, Box, Divider
} from '@material-ui/core'

import Contact from './Contact'

const useStyles = makeStyles({
  list: {
    'padding-top': '0px',
    'flex-grow': '1',
    'overflow-y': 'auto',
    'min-height': '100%'
  },
  wrapper: {
    'flex-grow': '1',
    display: 'flex',
    'flex-direction': 'column',
    'min-height': '0'
  },
  divider: {
    backgroundColor: '#f2f2f2'
  }
})

const ContactList = ({ chats, changeCurrent }) => {
  const classes = useStyles()
  return (
    <Box className={classes.wrapper}>
      <List className={classes.list}>
        {chats.list.map((item, idx) => (
          <div key={item.id}>
            <Contact
              contact={item}
              current={chats.current}
              changeCurrent={changeCurrent}
            />
            {idx < (chats.list.length - 1) && <Divider variant="inset" component="li" classes={{ root: classes.divider }} />}
          </div>
        ))}
      </List>
    </Box>
  )
}

export default ContactList
