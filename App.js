import React from 'react'
import {View, ScrollView} from 'react-native'
import Grid from './components/Grid'
import DynamicGrid from './components/DynamicGrid'
import {appStyles as styles} from './styles'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.statusBar} />
        <ScrollView style={styles.scrollView}>
          <DynamicGrid />
          <Grid />
        </ScrollView>
      </View>
    )
  }
}
