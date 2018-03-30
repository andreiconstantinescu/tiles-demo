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
import {onPressHandler} from '../utils'


export default class DynamicGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
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

    // this.onPressHandler = onPressHandler.bind(this)
    // console.log(this);

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
    const payload = {
      id,
      tiles,
      handler: ({tiles}) => this.setState({tiles})
    }
    return onPressHandler.call(this, payload)
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
