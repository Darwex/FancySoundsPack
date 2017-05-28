import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  AppRegistry,
  View,
  Image
} from 'react-native'
import sound from 'react-native-sound'
import config from './config/defaultConfig'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: config.images.nelson,
      sound: '',
      background: 'yellow'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.imageContainer}>
          <Image
              source={this.state.image}
              style={styles.image} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  imageContainer: {
    width: 320,
    height: 200,
    borderWidth: 10
  },
  image: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    resizeMode: 'stretch'
  }
});

AppRegistry.registerComponent('FancySoundsPack', () => App)
