import React, {Component} from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import AutoResponsive from 'autoresponsive-react-native'
import {API_URL, DYNAMIC_ITEMS} from '../constants'
import {gridStyles as styles} from '../styles'
import {map} from 'lodash'


export default class DynamicGrid extends Component {
  state = {
    tiles: []
  }
  
  componentWillMount() {
    const tilesData = map(DYNAMIC_ITEMS, ({api: {apiType, apiPayload, apiDataKey}}, key) => {
      const URL = `${API_URL}/${apiType}/${apiPayload}/`
      console.log('URL', URL);
      return fetch(URL)
        .then(response => response.json())
        .then(data => data[apiDataKey])
    })

    Promise.all(tilesData)
      .then(results => {
        const tiles = map(results, (value, key) => ({
          data: value,
          style: DYNAMIC_ITEMS[key].style,
          title: DYNAMIC_ITEMS[key].title
        }))

        this.setState({tiles})
      })
  }

  renderChildren() {
    const {tiles} = this.state
    return map(tiles, ({style, title, data}, key) => (
      <View style={style} key={key}>
        <TouchableOpacity>
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
