import {LAYOUTS_2, DYNAMIC_ITEMS} from './constants'

const onPressHandler = ({tiles, id, handler}) => {
  const tile = tiles[id]

  const maxLayouts = LAYOUTS_2.length - 1
  const currentLayoutId = tile.layoutId
  const nextLayoutId = currentLayoutId + 1
  const newLayoutId = nextLayoutId > maxLayouts ? 0 : nextLayoutId
  const newTile = {...tile, style: {...DYNAMIC_ITEMS[id].style, ...LAYOUTS_2[newLayoutId]}, layoutId: newLayoutId}
  const newState = {...tiles, [id]: newTile}

  return handler({tiles: newState})
}

export {
  onPressHandler
}
