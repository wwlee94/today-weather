import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = '0441471dfa4f3e9c73bd8c6155d927d4';

export default class App extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    setInterval(() => {
      this.setState({
        isLoading: false,
        temp,
        condition: weather[0].main
      });
    }, 2000);
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      // Send to API and get weather !
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you", 'So sad');
    }
  };

  componentDidMount() {
    this.getLocation();
  };

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  };
}

// backgroundColor: 'white',
// alignItems: 'center',
// justifyContent: 'center',