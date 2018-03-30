import React, {Component} from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import AutoResponsive from 'autoresponsive-react-native'
import {API_URL, DYNAMIC_ITEMS, LAYOUTS_2, DEFAULT_TILE_STYLE} from '../constants'
import {gridStyles as styles} from '../styles'
import {map, find, reduce} from 'lodash'


export default class DynamicGrid extends Component {
  state = {
    tiles: reduce(DYNAMIC_ITEMS, (acc, {layoutId, style, title}, key) => (
      {
        ...acc,
        [key]: {
          style: {
            ...LAYOUTS_2[layoutId],
            ...style
          },
          title,
          layoutId: layoutId
        }
      }
    ), {})
  }

  componentWillMount() {
    const {tiles} = this.state
    const tilesData = map(DYNAMIC_ITEMS, ({api: {apiType, apiPayload, apiDataKey}}, key) => {
      const URL = `${API_URL}/${apiType}/${apiPayload}/`
      return fetch(URL)
        .then(response => response.json())
        .then(data => data[apiDataKey])
    })

    Promise.all(tilesData)
      .then(results => {
        const tilesWithData = reduce(results, (acc, value, key) => ({
          ...acc,
          [key]: {
            ...tiles[key],
            data: value
          }
          }), {})

        this.setState({tiles: tilesWithData})
      })
  }

  onPressHandler = (id) => {
    const {tiles} = this.state
    const tile = tiles[id]
    //
    const maxLayouts = LAYOUTS_2.length - 1
    const currentLayoutId = tile.layoutId
    const nextLayoutId = currentLayoutId + 1
    const newLayoutId = nextLayoutId > maxLayouts ? 0 : nextLayoutId
    console.log({maxLayouts, currentLayoutId, nextLayoutId, newLayoutId, tile});
    const newTile = {...tile, style: {...DYNAMIC_ITEMS[id].style, ...LAYOUTS_2[newLayoutId]}, layoutId: newLayoutId}
    const newState = {...tiles, [id]: newTile}
    //
    this.setState({tiles: newState})
  }

  renderChildren() {
    const {tiles} = this.state

    return map(tiles, ({style, title, data}, key) => (
      <View style={style} key={key}>
        <TouchableOpacity onPress={() => this.onPressHandler(key)}>
          <View style={styles.touchableItem}>
            <Text>{title}</Text>
            <Text>{data}</Text>
          </View>
        </TouchableOpacity>
      </View>
    ))
  }

  render () {
    return (
      <AutoResponsive itemMargin={0}>
        {this.renderChildren()}
      </AutoResponsive>
    )
  }
}
