import {Dimensions} from 'react-native'
import {range} from 'lodash'

const SCREEN_WIDTH = Dimensions.get('window').width
const MAX_ITEMS = 10
const LAYOUTS = [
  {
    height: 170,
    backgroundColor: '#00b894'
  },
  {
    height: 220,
    width: SCREEN_WIDTH,
    backgroundColor: '#00cec9'
  },
  {
    height: 150,
    backgroundColor: '#ff7675'
  },
  {
    height: 200,
    backgroundColor: '#fdcb6e'
  },
  {
    height: 300,
    backgroundColor: '#dfe6e9'
  },
  {
    height: 250,
    backgroundColor: '#e17055'
  },
  {
    height: 150,
    backgroundColor: '#a29bfe'
  },
  {
    height: 280,
    backgroundColor: '#55efc4'
  },
  {
    height: 300,
    backgroundColor: '#74b9ff'
  },
  {
    height: 350,
    width: SCREEN_WIDTH,
    backgroundColor: '#d63031'
  }
]
const ITEMS_RANGE = range(MAX_ITEMS)

export {SCREEN_WIDTH, MAX_ITEMS, LAYOUTS, ITEMS_RANGE}
