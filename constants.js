import {Dimensions} from 'react-native'
import {range} from 'lodash'

const SCREEN_WIDTH = Dimensions.get('window').width
const MAX_ITEMS = 4
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
const STATIC_ITEMS = range(MAX_ITEMS)

const API_URL = 'https://swapi.co/api'

const DYNAMIC_ITEMS = [
  {
    api: {
      apiType: 'people',
      apiPayload: 1,
      apiDataKey: 'name'
    },
    title: 'STAR WARS CHARACTER',
    style: {
      width: SCREEN_WIDTH / 2,
      height: 170,
      backgroundColor: '#e17055'
    }
  },
  {
    api: {
      apiType: 'planets',
      apiPayload: 1,
      apiDataKey: 'name'
    },
    title: 'STAR WARS PLANET',
    style: {
      width: SCREEN_WIDTH / 2,
      height: 170,
      backgroundColor: '#e17055'
    }
  },
  {
    api: {
      apiType: 'starships',
      apiPayload: 9,
      apiDataKey: 'name'
    },
    title: 'STAR WARS STARSHIP',
    style: {
      width: SCREEN_WIDTH / 2,
      height: 170,
      backgroundColor: '#e17055'
    }
  },
  {
    api: {
      apiType: 'films',
      apiPayload: 1,
      apiDataKey: 'title'
    },
    title: 'STAR WARS FILM',
    style: {
      width: SCREEN_WIDTH / 2,
      height: 170,
      backgroundColor: '#e17055'
    }
  },
  {
    api: {
      apiType: 'vehicles',
      apiPayload: 4,
      apiDataKey: 'name'
    },
    title: 'STAR WARS VEHICLE',
    style: {
      width: SCREEN_WIDTH / 2,
      height: 170,
      backgroundColor: '#e17055'
    }
  },
  {
    api: {
      apiType: 'species',
      apiPayload: 2,
      apiDataKey: 'name'
    },
    title: 'STAR WARS SPECIES',
    style: {
      width: SCREEN_WIDTH / 2,
      height: 170,
      backgroundColor: '#e17055'
    }
  }
]

export {SCREEN_WIDTH, MAX_ITEMS, LAYOUTS, STATIC_ITEMS, API_URL, DYNAMIC_ITEMS}
