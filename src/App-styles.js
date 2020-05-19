export default () => ({
  root: {
    height: '100vh',
    zIndex: 999,
    '@media (min-height: 970px)': {
      padding: '20px 0'
    }
  },
  card: {
    borderRadius: 'unset',
    display: 'flex',
    height: '100%',
    'max-width': '1400px',
    width: '100%',
    'max-height': '970px',
    '@media (min-height: 970px)': {
      'max-height': 'none'
    }
  },
  rightBorder: {
    borderRight: 'solid #d0D0D0 1px',
    background: '#ededed'
  },
  content: {
    marginTop: 0,
    padding: '0 !important',
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'flex-end'
  },
  background: {
    position: 'absolute',
    height: 200,
    width: '100%',
    top: 0,
    background: '#009788',
    'z-index': -1
  },
  mobileView: {
    position: 'absolute',
    top: '50vh',
    textAlign: 'center',
    width: '100%'
  }
})
