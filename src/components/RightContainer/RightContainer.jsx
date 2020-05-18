import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card } from '@material-ui/core'

import backgroundChat from './bg-chat.png'
import RightHeader from './RightHeader/RightHeader'
import RightContent from './RightContent/RightContent'
import RightActions from './RightActions/RightActions'

const useStyle = makeStyles({
  grid: {
    height: '100%',
    width: '70%'
  },
  card: {
    position: 'relative',
    display: 'flex',
    height: '100%',
    flex: '1',
    'flex-direction': 'column'
  }
})

const RightContainer = ({ chat, sendMessage }) => {
  const classes = useStyle()
  return (
    <Grid item id="rightGrid" className={classes.grid}>
      <Card className={classes.card}>
        <RightHeader chat={chat} style={{ zIndex: '2' }} />
        <Background />
        <RightContent chat={chat} />
        <RightActions sendMessage={sendMessage} style={{ zIndex: '2' }} />
      </Card>
    </Grid>
  )
}

const Background = () => (
  <div style={{
    backgroundImage: `url(${backgroundChat})`,
    opacity: '0.06',
    position: 'absolute',
    width: '100%',
    height: '100%'
  }}
  />
)

export default RightContainer
