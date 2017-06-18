import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image
} from 'react-native'

export default class TouchableList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const listItems = (<View>
      {this.props.availableTypes.map( (item, key) => {
          return (
            <TouchableOpacity style={styles.container} key={key}>
              <Image
                source={item.image}
                style={styles.image}
                onTouch={this.props.onTouch.bind(null, item)} />
            </TouchableOpacity>
          )
      })}
    </View>)

        return (
            <View>
              {listItems}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 80,
        height: 80,
        borderWidth: 5,
        borderRadius: 10,
        borderColor: 'black'
    }
})
