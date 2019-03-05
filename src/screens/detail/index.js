import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {}
    }
  }

  componentDidMount() {
    const { navigation } = this.props;
    const data = navigation.getParam('data', null);
    if (data) {
      this.setState({
        info: data
      })
    } else {
      console.log('No data to display')
    }
  }

  render() {
    const { info } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={styles.labelText}>State:</Text>
          <Text style={styles.valueText}>{info.state}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.labelText}>Capital:</Text>
          <Text style={styles.valueText}>{info.capital}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.labelText}>Statehood:</Text>
          <Text style={styles.valueText}>1778</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.labelText}>Area:</Text>
          <Text style={styles.valueText}>131.7 mi²</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30
  },
  labelText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10
  },
  valueText: {
    fontSize: 18
  }
});
