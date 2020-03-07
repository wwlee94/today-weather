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
        subtitle: "It's raining 🌧"
    },
    Clear: {
        iconName: 'white-balance-sunny',
        gradient: ['#FEF253', '#FF7300'],
        title: 'Sunny',
        subtitle: "Let's go out and play ☀️!!"
    },
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#373B44', '#4286F4'],
        title: 'Thunderstorm',
        subtitle: ''
    },
    Clouds: {
        iconName: 'apple-icloud',
        gradient: ['#D7D2CC', '#304352'],
        title: 'Cloudy',
        subtitle: ''
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
        subtitle: "It's like rain 🌦"
    },
    Atmosphere: {
        iconName: 'weather-hail',
        gradient: ['#89F7FE', '#66A6FF'],
        title: '',
        subtitle: ''
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#eef2f3', '#8e9eab'],
        title: 'Fogy',
        subtitle: ''
    },
    Haze: {
        iconName: 'weather-fog',
        gradient: ['#D7D2CC', '#304352'],
        title: 'Haze',
        subtitle: "It's like you have no glasses on."
    },
    Dust: {
        iconName: 'weather-fog',
        gradient: ['#D39D38', '#D7D2CC'],
        title: 'Dusty',
        subtitle: ''
    }
}

export default function Weather({ temp, condition }) {
    console.log('Condition: ' + condition);
    condition = 'Mist'
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
        alignItems: 'center'
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
        fontSize: 38,
        fontWeight: '300',
        marginBottom: 20
    },
    subtitle: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
        marginBottom: 50
    },
    textContainer: {
        paddingHorizontal: 25,
        alignItems: 'flex-start'
    }
})