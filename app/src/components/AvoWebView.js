import React from 'react';
import { Share, View } from 'react-native'
import { WebView } from 'react-native-webview';

import AvoWebViewControl from './AvoWebViewControl'
import styles from '../style/styles'

export default class AvoWebView extends React.Component {
  constructor (props) {
    super(props)

    this.startingUrl = 'https://manual.avolites.com/docs/introduction/'

    this.state = {
      canGoBack: false,
      canGoForward: false,
      title: 'Avolites Titan Manual',
      url: this.startingUrl,
    }
  }
  
  handleBack = () => {
    if (this.state.canGoBack) 
      this.webView.goBack()
  }
  
  handleForward = () => {
    if (this.state.canGoForward) 
      this.webView.goForward()
  }
  
  handleShare = () => {
    Share.share({
      message: this.state.title,
      url: this.state.url
    });
  }

  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack,
      canGoForward: navState.canGoForward,
      title: navState.title,
      url: navState.url,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={styles.AvoWebViewContainer}>
          <WebView
            source={{ uri: this.startingUrl }}
            style={styles.AvoWebView}
            ref={webView => (this.webView = webView)}
            onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          />
        </View>
        <View
          style={styles.AvoWebViewControls}>
          <AvoWebViewControl
            symbol="chevron-left"
            onTouchEnd={() => this.handleBack()}
            enabled={this.state.canGoBack}
          />

          <AvoWebViewControl
            symbol="chevron-right"
            onTouchEnd={() => this.handleForward()}
            enabled={this.state.canGoForward}
          />

          <AvoWebViewControl
            symbol="share"
            onTouchEnd={() => this.handleShare()}
          />

          <AvoWebViewControl
            symbol="menu"
          />
        </View>
      </View>
    )
  }
}