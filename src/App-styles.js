export default () => ({
  root: {
    padding: '50px 100px',
    zIndex: 999
  },
  card: {
    display: 'flex',
    height: 'calc(100vh - 100px)'
  },
  rightBorder: {
    borderRight: 'solid #d0D0D0 1px',
    background: '#dfdfdf'
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
      'url(https://hdwallsource.com/img/2014/8/my-neighbor-totoro-wallpaper-27981-28703-hd-wallpapers.jpg) center center',
    'overflow-y': 'scroll',
    'flex-direction': 'column-reverse',
    display: 'flex',
    flex: '1'
  },
  paper: {
    background: '#9de1fe',
    padding: 20
  },
  cardHeader: {
    background: '#dfdfdf'
    // padding: "15px"
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
  leftList: {
    'padding-top': '0px'
  },
  'leftList-intro': {
    'text-overflow': 'ellipsis',
    overflow: 'hidden',
    'white-space': 'nowrap'
  }
});
