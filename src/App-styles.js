// TODO identify reused classes

export default () => ({
  root: {
    height: '100vh',
    zIndex: 999,
    '@media (min-height: 970px)': {
      padding: '20px 0'
    }
  },
  cardHeader: {
    background: '#ededed',
    padding: '6px 16px'
  },
  'cardHeader-action': {
    marginTop: '0'
  },
  card: {
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
    display: 'flex',
    height: '100%',
    flex: '1',
    'flex-direction': 'column'
  },
  chatArea: {
    background:
      'url(bg-chat.png)',
    'overflow-y': 'auto',
    'flex-direction': 'column-reverse',
    display: 'flex',
    flex: '1',
    height: '100%',
    width: '100%'
    // opacity: '0.06'
  },
  paper: {
    background: '#9de1fe',
    padding: 20
  },
  message: {
    background: 'white',
    padding: 10,
    'max-width': '50%',
    width: 'fit-content'
  },
  'message-wrapper': {
    'padding-top': '2px',
    'padding-bottom': '2px'
  },
  inputMessage: {
    height: '25px'
  },
  information: {
    color: '#444'
  },
  leftGrid: {
    height: '100%',
    display: 'flex',
    'flex-direction': 'column'
  },
  leftList: {
    'padding-top': '0px',
    'flex-grow': '1',
    'overflow-y': 'auto',
    'min-height': '100%'
  },
  'leftList-wrapper': {
    'flex-grow': '1',
    display: 'flex',
    'flex-direction': 'column',
    'min-height': '0'
  },
  'leftList-intro': {
    'text-overflow': 'ellipsis',
    overflow: 'hidden',
    'white-space': 'nowrap'
  }
})
