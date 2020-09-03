import { StyleSheet } from 'react-native'
import theme from './theme'

export default StyleSheet.create({
  appContainer:{
    paddingTop: 20,
    flex: 1,
    backgroundColor: theme.colors.primaryDark,
    alignItems: 'center',
    justifyContent: 'center'
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  AvoWebViewContainer: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
  },

  AvoWebView: {
    flex: 1
  },

  AvoWebViewControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },

  AvoWebViewControl: {
    flex: 1,
    alignItems: 'center',
  },
})