import {SCREEN_WIDTH} from './constants'

const styles = {
  container: {
    backgroundColor: '#301711'
  },
  title: {
    paddingTop: 20,
    paddingBottom: 20
  },
  titleText: {
    color: '#d0bbab',
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold'
  },
  text: {
    textAlign: 'center',
    fontSize: 60,
    fontWeight: 'bold',
    color: 'rgb(58, 45, 91)'
  },
  gridItem: {
    width: SCREEN_WIDTH / 2,
    paddingTop: 20,
    borderWidth: 1,
    borderColor: 'black'
  },
  touchableItem: {
    height: '100%'
  }
}

export default styles
