import React, {Component} from 'react';
import {AsyncStorage, StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { initial_data } from '../../assets/data/config';

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    }
  }

  componentDidMount() {
    AsyncStorage.getItem('data').then((res, error) => {
      if (error) {
        console.log('Error occured when fetch data.')
      } else {
        if (res) {
          this.setState({
            locations: JSON.parse(res)
          })
        } else {
          AsyncStorage.setItem('data', JSON.stringify(initial_data))
          .then((res) => {
           this.setState({
             locations: initial_data
           })
          }).catch((err) => {
            console.log('Error occured when save data.')
          }) 
        }
      }
    });
  }

  render() {
    const { locations } = this.state;
    const { navigation } = this.props;
    return (
      <View style={{flex: 1}}>
        <ScrollView style={styles.container}>
          {
            locations.map((location, index) => {
              return <TouchableOpacity key={index} style={styles.itemContainer} onPress={() => navigation.navigate('Detail', {data: location})}>
                <Text style={{color: 'black', fontSize: 18}}>{location.state}</Text>
                <Text style={{color: 'gray', fontSize: 16}}>{location.capital}</Text>
              </TouchableOpacity>
            })
          }
        </ScrollView>

        <TouchableOpacity style={styles.addButtonContainer} onPress={() => navigation.navigate('Add')}>
          <Icon name={'ios-add'} size={50} color={'white'}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 3,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: 'gray'
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 50,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4C3E54'
  }
});
