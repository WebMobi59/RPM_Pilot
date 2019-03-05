import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { AppNavigator } from './src/screens/AppNavigator';

export default class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000)
  }

  render() {
    return (
      <AppNavigator />
    );
  }
}