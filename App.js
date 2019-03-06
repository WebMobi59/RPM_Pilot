import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { AppNavigator } from './src/screens/AppNavigator';
import { initial_data } from './src/assets/data/config.js';

export default class App extends Component {
  componentDidMount() {
    AsyncStorage.setItem('data', JSON.stringify(initial_data))
    .then((res) => {
      setTimeout(() => {
        SplashScreen.hide();
      }, 3000)
    }).catch((err) => {
      console.log('Error occured when save data.')
    })   
  }

  render() {
    return (
      <AppNavigator screenProps={this.props}/>
    );
  }
}