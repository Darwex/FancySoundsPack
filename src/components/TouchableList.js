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
        const listItems = (
          <View style={styles.container} >
            {this.props.availableTypes.map((item, key) => {
                return (
                  <TouchableOpacity
                    style={styles.listItem}
                    key={key}
                    onPress={this.props.changeType.bind(null, item)}>
                      <Image
                        source={item.image}
                        style={styles.image} />
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
        flexDirection:'row',
        flexWrap: 'wrap'
    },
    listItem: {
        marginRight: 10
    },
    image: {
        width: 80,
        height: 80,
        borderWidth: 5,
        borderRadius: 10,
        borderColor: 'black'
    }
})
