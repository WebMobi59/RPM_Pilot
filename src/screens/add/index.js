import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, TextInput, Text, View} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast';

export default class AddScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: ''
    }
  }

  _validateUSZipCode = (zipcode) => {
    return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipcode);
  }

  _continue = () => {
    const { zipcode } = this.state;
    if (zipcode == '') {
      this.refs.toast.show('You need to fill the zipcode.', DURATION.LENGTH_LONG);
    } else if (!this._validateUSZipCode(zipcode)) {
      this.refs.toast.show('It seems your zipcode is invalid.', DURATION.LENGTH_LONG);
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
