// TODO identify reused classes

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
    // "max-height": "730px",
    // "overflow-y": "scroll",
  },
  'content-fix': {
    flex: '1 1 auto'
  },
  background: {
    position: 'absolute',
    height: 200,
    width: '100%',
    top: 0,
    background: '#009788',
    'z-index': -1
  },
  rightGrid: {
    height: '100%'
  },
  rightCard: {
    position: 'relative',
    display: 'flex',
    height: '100%',
    flex: '1',
    'flex-direction': 'column'
  },
  chatArea: {
    'overflow-y': 'scroll',
    'flex-direction': 'column-reverse',
    display: 'flex',
    flex: '1',
    height: '100%'
  },
  paper: {
    background: '#9de1fe',
    padding: 20
  },
  message: {
    background: '#dcf8c6',
    padding: 10,
    'max-width': '50%',
    width: 'fit-content'
  },
  'message-wrapper': {
    'padding-top': '2px',
    'padding-bottom': '2px',
    justifyContent: 'flex-end'
  },
  inputMessage: {
    height: '25px'
  }
})
