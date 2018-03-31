const onPressHandler = ({tiles, id, handler, items, layouts}) => {
  const tile = tiles[id]

  const maxLayouts = layouts.length - 1
  const currentLayoutId = tile.layoutId
  const nextLayoutId = currentLayoutId + 1
  const newLayoutId = nextLayoutId > maxLayouts ? 0 : nextLayoutId
  const newTile = {
    ...tile,
    style: {...items[id].style, ...layouts[newLayoutId]},
    layoutId: newLayoutId
  }
  const newState = {...tiles, [id]: newTile}

  return handler({tiles: newState})
}

export {onPressHandler}
