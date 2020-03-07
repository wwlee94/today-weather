import React from 'react';
import {Alert} from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';

export default class App extends React.Component {
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      // Send to API and get weather !
    } catch (error) {
      Alert.alert("Can't find you", "So sad");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    return <Loading />
  }
}

// backgroundColor: 'white',
// alignItems: 'center',
// justifyContent: 'center',