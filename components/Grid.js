import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import AutoResponsive from 'autoresponsive-react-native'
import {gridStyles as styles} from '../styles'
import {map, find, reduce} from 'lodash'
import {onPressHandler} from '../utils'

export default class DynamicGrid extends Component {
  constructor(props) {
    super(props)
    const {layouts, items} = this.props

    this.state = {
      tiles: reduce(
        items,
        (acc, {layoutId, style, title}, key) => ({
          ...acc,
          [key]: {
            style: {
              ...layouts[layoutId],
              ...style
            },
            title,
            layoutId: layoutId
          }
        }),
        {}
      )
    }
  }

  componentWillMount() {
    const {api, items} = this.props

    if (!api) {
      return
    }
    const {tiles} = this.state
    const tilesData = map(
      items,
      ({api: {apiType, apiPayload, apiDataKey}}, key) => {
        const URL = `${api}/${apiType}/${apiPayload}/`
        return fetch(URL)
          .then(response => response.json())
          .then(data => data[apiDataKey])
      }
    )

    Promise.all(tilesData).then(results => {
      const tilesWithData = reduce(
        results,
        (acc, value, key) => ({
          ...acc,
          [key]: {
            ...tiles[key],
            data: value
          }
        }),
        {}
      )

      this.setState({tiles: tilesWithData})
    })
  }

  onPressHandler = id => {
    const {layouts, items} = this.props
    const {tiles} = this.state
    const payload = {
      id,
      tiles,
      handler: ({tiles}) => this.setState({tiles}),
      layouts,
      items
    }
    return onPressHandler.call(this, payload)
  }

  renderChildren = () => {
    const {tiles} = this.state

    return map(tiles, ({style, title, data}, key) => (
      <View style={{...styles.gridItem, ...style}} key={key}>
        <TouchableOpacity
          style={styles.touchableItem}
          onPress={() => this.onPressHandler(key)}
        >
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text>{data}</Text>
          </View>
        </TouchableOpacity>
      </View>
    ))
  }

  render() {
    return (
      <AutoResponsive itemMargin={0}>{this.renderChildren()}</AutoResponsive>
    )
  }
}
