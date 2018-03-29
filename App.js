import React from 'react'
import {View} from 'react-native'
import Grid from './components/Grid'
import {appStyles as styles} from './styles'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.statusBar} />
        <Grid />
      </View>
    )
  }
}
