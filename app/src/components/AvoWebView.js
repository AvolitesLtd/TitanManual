import React from 'react';
import { View } from 'react-native'
import { WebView } from 'react-native-webview';
import { Entypo } from '@expo/vector-icons'; 

import AvoWebViewControl from './AvoWebViewControl'
import styles from '../style/styles'

export default class AvoWebView extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      canGoBack: false,
      canGoForward: false,
    }
  }
  
  handleBackButton = () => {
    if (this.state.canGoBack) 
      this.webView.goBack()
  }
  
  handleForwardButton = () => {
    if (this.state.canGoForward) 
      this.webView.goForward()
  }

  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack,
      canGoForward: navState.canGoForward
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={styles.AvoWebViewContainer}>
          <WebView
            source={{ uri: 'https://manual.avolites.com/docs/introduction/' }}
            style={styles.AvoWebView}
            ref={webView => (this.webView = webView)}
            onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          />
        </View>
        <View
          style={styles.AvoWebViewControls}>
          <AvoWebViewControl
            symbol="chevron-left"
            onTouchEnd={() => this.handleBackButton()}
            enabled={this.state.canGoBack}
          />

          <AvoWebViewControl
            symbol="chevron-right"
            onTouchEnd={() => this.handleForwardButton()}
            enabled={this.state.canGoForward}
          />

          <AvoWebViewControl
            symbol="share"
            onTouchEnd={() => this.handleBackButton()}
          />

          <AvoWebViewControl
            symbol="menu"
            onTouchEnd={() => this.handleBackButton()}
          />
        </View>
      </View>
    )
  }
}