import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  AppRegistry,
  View,
  Image,
  Text
} from 'react-native'
import sound from 'react-native-sound'
import config from './config/defaultConfig'
import TouchableList from './components/TouchableList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentType: config.types[0]
    }

    sound.setCategory('Ambient')

    this.changeType = this.changeType.bind(this)
    this.playSound = this.playSound.bind(this)
  }

  changeType(newType) {
    this.setState({
      currentType: newType
    })
    console.log(currentType)
  }

  playSound() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Tap the picture!</Text>
        <TouchableOpacity>
          <Image
              onTouch={this.playSound}
              source={this.state.currentType.image}
              style={styles.image}/>
        </TouchableOpacity>
        <TouchableList
          availableTypes={config.types}
          onTouch={this.changeType} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    fontSize: 30,
    marginBottom: 20
  },
  image: {
    width: 320,
    height: 200,
    borderWidth: 5,
    borderRadius: 20,
    marginBottom: 20
  }
});

AppRegistry.registerComponent('FancySoundsPack', () => App)
