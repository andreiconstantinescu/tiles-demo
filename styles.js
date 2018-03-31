import {SCREEN_WIDTH} from './constants'
import {StyleSheet} from 'react-native'
import {Constants} from 'expo'

const gridStyles = {
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
    borderWidth: 1,
    borderColor: 'white',
    flex: 2
  },
  touchableItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  title: {
    fontWeight: 'bold'
  }
}

const appStyles = StyleSheet.create({
  statusBar: {
    backgroundColor: 'white'
  },
  scrollView: {
    // backgroundColor: '#301711'
  },
  appWraper: {
    paddingTop: Constants.statusBarHeight
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10
  }
})

export {gridStyles, appStyles}
