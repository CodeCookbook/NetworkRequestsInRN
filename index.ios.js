/**






  How to make network requests in
  React Native

  A Recipe from Code Cookbook
  http://codecookbook.co







*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class NetworkInspector extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight>
          <Text style={styles.welcome}>
            Code Cookbook
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('NetworkInspector', () => NetworkInspector);
