export default () => ({
  root: {
    padding: '50px 100px',
    zIndex: 999,
    position: 'absolute'
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
    background: '#009788'
  },
  rightContainer: {
    background:
      'url(https://hdwallsource.com/img/2014/8/my-neighbor-totoro-wallpaper-27981-28703-hd-wallpapers.jpg) center center',
    flex: 1
  },
  heightAdjust: {
    display: 'flex',
    flexDirection: 'column'
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
    margin: '5px 5px 10px 15px',
    'max-width': '50%',
    width: 'fit-content'
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
