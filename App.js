import React from 'react'
import {View, ScrollView, Text} from 'react-native'
import Grid from './components/Grid'
import {appStyles as styles} from './styles'
import {
  API_URL,
  AYOUTS,
  DYNAMIC_ITEMS,
  STATIC_ITEMS,
  LAYOUTS
} from './constants'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.appWraper}>
        <View style={styles.statusBar} />
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>Dynamic Grid Items</Text>
          <Grid items={DYNAMIC_ITEMS} layouts={LAYOUTS} api={API_URL} />
          <Text style={styles.title}>Static Grid Items</Text>
          <Grid items={STATIC_ITEMS} layouts={LAYOUTS} />
        </ScrollView>
      </View>
    )
  }
}
