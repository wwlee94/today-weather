import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Rain: {
        iconName: 'weather-rainy',
        gradient: ['#00C6EB', '#005BEA'],
        title: "Rainy",
        subtitle: "It's raining 🌧, Take your umbrella 🌂"
    },
    Clear: {
        iconName: 'white-balance-sunny',
        gradient: ['#FEF253', '#FF7300'],
        title: 'Sunny',
        subtitle: "Let's go out and play 😎!!"
    },
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#373B44', '#4286F4'],
        title: 'Thunderstorm',
        subtitle: 'Thunder storm in the house ! ⚡️'
    },
    Clouds: {
        iconName: 'apple-icloud',
        gradient: ['#D7D2CC', '#304352'],
        title: 'Cloudy',
        subtitle: "I know, It's so boring 😑"
    },
    Snow: {
        iconName: 'snowflake',
        gradient: ['#7DE2FC', '#B9B6E5'],
        title: 'Snowy',
        subtitle: 'Do you want to build a snowman? ☃️'
    },
    Drizzle: {
        iconName: 'weather-hail',
        gradient: ['#89F7FE', '#66A6FF'],
        title: 'Drizzle',
        subtitle: "Maybe, It's like rain 🌦"
    },
    Atmosphere: {
        iconName: 'weather-hail',
        gradient: ['#89F7FE', '#66A6FF'],
        title: 'Atmosphere',
        subtitle: "Maybe, It's like little Misty"
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#eef2f3', '#8e9eab'],
        title: 'Misty',
        subtitle: "It's so Misty ~🌫~"
    },
    Haze: {
        iconName: 'weather-fog',
        gradient: ['#D7D2CC', '#304352'],
        title: 'Fog',
        subtitle: "It's like you have no glasses on. 👻"
    },
    Dust: {
        iconName: 'weather-fog',
        gradient: ['#D39D38', '#D7D2CC'],
        title: 'Dusty',
        subtitle: 'Where are the fine dust coming from ? 🤦🏻‍♀️'
    }
}

export default function Weather({ temp, condition }) {
    console.log('Condition: ' + condition);
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle='light-content' />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={96}
                    name={weatherOptions[condition].iconName}
                    color='white'
                />
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        'Thunderstorm',
        'Drizzle',
        'Rain',
        'Snow',
        'Atmosphere',
        'Clear',
        'Clouds',
        'Haze',
        'Mist',
        'Dust'
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40
    },
    temp: {
        fontSize: 48,
        color: 'white',
        marginTop: 10
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 45,
        fontWeight: '200',
        marginBottom: 10
    },
    subtitle: {
        fontSize: 28,
        fontWeight: '500',
        color: 'white',
        marginBottom: 10
    },
    textContainer: {
        paddingHorizontal: 25,
        alignItems: 'flex-start'
    }
})