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
import Sound from 'react-native-sound'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentType: config.types[0]
        }

        Sound.setCategory('Ambient', true)

        this.changeTypeBound = this.changeType.bind(this)
        this.playSoundBound = this.playSound.bind(this)
    }

    changeType(newType) {
        this.setState({
            currentType: newType
        })
    }

    playSound() {
        const s = new Sound(this.state.currentType.sound, Sound.MAIN_BUNDLE, (e) => {
            if (e) {
                console.log('error', e)
            } else {
                s.setSpeed(1)
                console.log('duration', s.getDuration())
                s.play(() => s.release()) // Release when it's done so we're not using up resources
            }
        })
    // Release the audio player resource
        s.release()
    }

    render() {
        console.log(this.state)

        return (
      <View style={styles.container}>
        <Text style={styles.heading}>Tap the picture!</Text>
        <TouchableOpacity
            onPress={this.playSoundBound}>
          <Image
              source={this.state.currentType.image}
              style={styles.image}/>
        </TouchableOpacity>
        <TouchableList
          availableTypes={config.types}
          onTouch={this.changeTypeBound} />
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
})

AppRegistry.registerComponent('FancySoundsPack', () => App)
