import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import styles from './src/style/styles'

import AvoWebView from './src/components/AvoWebView'

export default function App() {
  return (
    <View style={styles.appContainer}>
      <StatusBar style="auto"  style="light" />
      <AvoWebView />
    </View>
  );
}