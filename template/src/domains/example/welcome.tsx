/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/patrickkempff/react-native-template-tuil
 *
 * @format
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

import Example from '@app/components/example'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

export default class Welcome extends Component<{}> {
  render () {
    return (
      <View style={styles.container}>
        <Example text='Tuil' />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit src/domains/example/placeholder.tsx</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    )
  }
}
