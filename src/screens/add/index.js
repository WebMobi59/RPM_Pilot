import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, TextInput, Text, View, AsyncStorage} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast';

const API_URL = 'https://maps.googleapis.com/maps/api/geocode/json?'
const API_KEY = 'AIzaSyBfUD3duapF-3f1Ppngz2_sdC5Z81MsXMc' // put your API_Key here.

export default class AddScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: ''
    }
  }

  componentDidMount() {
    const { zip_code } = this.props.screenProps;
    this.setState({
      zipcode: zip_code
    })
  }

  _validateUSZipCode = (zipcode) => {
    return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipcode);
  }

  _getCityName = (data) => {
    const result = data.filter((item) => {
      return item.types.includes('locality') == true
    })
    return result[0].long_name;
  }

  _getStateName = (data) => {
    const result = data.filter((item) => {
      return item.types.includes('administrative_area_level_1') == true
    })
    return result[0].long_name + ` (${result[0].short_name})`;
  }

  _addData = (state, city) => {
    AsyncStorage.getItem('data').then((res, error) => {
      if (error) {
        console.log('Error occured when fetch data.')
      } else {
        if (res) {
          var data = JSON.parse(res);
          data.push({
            state: state,
            capital: city
          });
          AsyncStorage.setItem('data', JSON.stringify(data))
          .then(() => {
            this.props.navigation.navigate('List');
          }).catch(() => {
            console.log('Error occured when save data.')
          }) 
        }
      }
    });
  }

  _continue = () => {
    const { zipcode } = this.state;
    if (zipcode == '') {
      this.refs.toast.show('You need to fill the zipcode.', DURATION.LENGTH_LONG);
    } else if (!this._validateUSZipCode(zipcode)) {
      this.refs.toast.show('It seems your zipcode is invalid.', DURATION.LENGTH_LONG);
    } else {
      fetch(API_URL + `key=${API_KEY}&address=${this.state.zipcode}`, {
        method: 'GET'
      })
      .then((res) => res.json())
      .then((result) => {
        if (result.status == 'OK') {
          const data = result.results[0].address_components;
          const city = this._getCityName(data);
          const state = this._getStateName(data);

          console.log(data);
          console.log(city, state);
          this.refs.toast.show(`Status: ${state} \n City: ${city}`, DURATION.LENGTH_LONG);
          setTimeout(() => {
            this._addData(state, city);
          }, 2000)
        } else {
          this.refs.toast.show('API request denied.', DURATION.LENGTH_LONG);
        }
      }).catch((err) => {
        this.refs.toast.show('Error occured from Google Map API.', DURATION.LENGTH_LONG);
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          value={this.state.zipcode}
          placeholder={'Zip Code'}
          onChangeText={(text) => {
            this.setState({
              zipcode: text
            })
          }}
          keyboardType={'number-pad'}
          textAlign={'center'}
          style={styles.textInput}
        />
        <TouchableOpacity onPress={() => this._continue()} style={styles.buttonContainer}>
          <Text style={{color: 'white', fontSize: 18}}>Continue</Text>
        </TouchableOpacity>

        <Toast ref='toast' positionValue={150} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    marginTop: 80,
    borderColor: '#4C3E54',
    borderWidth: 0.5,
    borderRadius: 6,
    width: 200,
    height: 40
  },
  buttonContainer: {
    backgroundColor: '#4C3E54',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 30
  }
});
