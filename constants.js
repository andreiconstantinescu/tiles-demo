import {Dimensions} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width

export const LAYOUTS = [
  {
    height: 150,
    backgroundColor: '#fdcb6e'
  },
  {
    height: 200
  },
  {
    height: 350
  }
]
export const DEFAULT_TILE_STYLE = {
  width: SCREEN_WIDTH / 2,
  backgroundColor: '#00b894'
}
export const STATIC_ITEMS = [
  {
    id: 1,
    title: 'STATIC TILE',
    style: {...DEFAULT_TILE_STYLE},
    layoutId: 1
  },
  {
    id: 2,
    title: 'ANOTHER STATIC TILE',
    style: {...DEFAULT_TILE_STYLE},
    layoutId: 1
  },
  {
    id: 3,
    title: 'THE STATIC TILE',
    style: {...DEFAULT_TILE_STYLE},
    layoutId: 1
  },
  {
    id: 4,
    title: 'THE STATIC TILE STRIKES AGAIN',
    style: {...DEFAULT_TILE_STYLE},
    layoutId: 1
  }
]
export const DYNAMIC_ITEMS = [
  {
    id: 1,
    api: {
      apiType: 'people',
      apiPayload: 1,
      apiDataKey: 'name'
    },
    title: 'STAR WARS CHARACTER',
    style: {...DEFAULT_TILE_STYLE},
    layoutId: 1
  },
  {
    id: 2,
    api: {
      apiType: 'planets',
      apiPayload: 1,
      apiDataKey: 'name'
    },
    title: 'STAR WARS PLANET',
    style: {
      ...DEFAULT_TILE_STYLE,
      backgroundColor: '#e17055'
    },
    layoutId: 1
  },
  {
    id: 3,
    api: {
      apiType: 'starships',
      apiPayload: 9,
      apiDataKey: 'name'
    },
    title: 'STAR WARS STARSHIP',
    style: {
      ...DEFAULT_TILE_STYLE,
      backgroundColor: '#a29bfe'
    },
    layoutId: 1
  },
  {
    id: 4,
    api: {
      apiType: 'films',
      apiPayload: 1,
      apiDataKey: 'title'
    },
    title: 'STAR WARS FILM',
    style: {...DEFAULT_TILE_STYLE},
    layoutId: 1
  },
  {
    id: 5,
    api: {
      apiType: 'vehicles',
      apiPayload: 4,
      apiDataKey: 'name'
    },
    title: 'STAR WARS VEHICLE',
    style: {...DEFAULT_TILE_STYLE},
    layoutId: 1
  },
  {
    id: 6,
    api: {
      apiType: 'species',
      apiPayload: 2,
      apiDataKey: 'name'
    },
    title: 'STAR WARS SPECIES',
    style: {...DEFAULT_TILE_STYLE},
    layoutId: 1
  }
]
export const API_URL = 'https://swapi.co/api'
