import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { AppNavigator } from './src/screens/AppNavigator';

const initial_data = [
  {
    state: 'Alabama (AL)',
    capital: 'Montgomery'
  },
  {
    state: 'Alaska (AK)',
    capital: 'Juneau'
  },
  {
    state: 'Arizona (AZ)',
    capital: 'Phoenix'
  },
  {
    state: 'Arkansas (AR)',
    capital: 'Little Rock'
  },
  {
    state: 'California (CA)',
    capital: 'Sacramento'
  },
  {
    state: 'Colorado (CO)',
    capital: 'Denver'
  },
  {
    state: 'Connecticut (CT)',
    capital: 'Hartford'
  },
  {
    state: 'Delaware (DE)',
    capital: 'Dover'
  },
  {
    state: 'Florida (FL)',
    capital: 'Tallahassee'
  },
  {
    state: 'Hawaii (HI)',
    capital: 'Honolulu'
  }
]

export default class App extends Component {
  async componentDidMount() {
    try {
      await AsyncStorage.setItem('data', JSON.stringify(initial_data));
    } catch (error) {
      console.log('Error occured when save data.')
    }

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