import React from 'react';
import { View } from 'react-native'
import { Entypo } from '@expo/vector-icons'; 

import styles from '../style/styles'
import theme from '../style/theme'

export default class AvoWebViewControl extends React.Component {
  render () {
    return (
      <View
        style={styles.AvoWebViewControl}
        onTouchEnd={this.props.onTouchEnd}>
        <Entypo
          name={this.props.symbol}
          size={30}
          color={this.props.enabled === false ? theme.colors.grey : 'white'}
          />
      </View>
    )
  }
}