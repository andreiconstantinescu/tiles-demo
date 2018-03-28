import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import AutoResponsive from 'autoresponsive-react-native'
import {range, assign, times, reduce, map} from 'lodash'
import {ITEMS_RANGE, LAYOUTS} from './constants'
import styles from './styles'

export default class Grid extends Component {
  state = {
    itemLayoutMap: {}
  }

  componentWillMount() {
    const {itemLayoutMap} = this.state

    const newItemLayoutMap = reduce(
      ITEMS_RANGE,
      (acc, idx) =>
        assign(acc, {
          [idx]: this.getRandomLayout()
        }),
      {}
    )

    this.setState({...this.state, itemLayoutMap: newItemLayoutMap})
  }

  getRandomLayout = () => {
    const length = LAYOUTS.length
    const id = parseInt(Math.random() * length)
    console.log('id', id)
    const selectedLayout = LAYOUTS[id]

    return assign({}, styles.gridItem, selectedLayout)
  }

  getAutoResponsiveProps() {
    return {
      itemMargin: 0
    }
  }

  onPressTile = idx => {
    const layout = this.getRandomLayout()
    const {itemLayoutMap} = this.state
    const newItemLayoutMap = assign({}, itemLayoutMap, {
      [idx]: layout
    })

    this.setState({...this.state, itemLayoutMap: newItemLayoutMap})
  }

  renderChildren() {
    const {itemLayoutMap} = this.state

    return map(ITEMS_RANGE, (idx, key) => {
      const style = itemLayoutMap[key]

      return (
        <View style={style} key={key}>
          <TouchableOpacity onPress={() => this.onPressTile(key)}>
            <View style={styles.touchableItem}>
              <Text style={styles.text}>{key}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>autoresponsive</Text>
        </View>
        <AutoResponsive {...this.getAutoResponsiveProps()}>
          {this.renderChildren()}
        </AutoResponsive>
      </ScrollView>
    )
  }
}
