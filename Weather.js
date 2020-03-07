import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: 'weather-hail'
    }
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
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
            <View style={styles.halfContainer}>
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
        fontSize: 32,
        color: 'white'
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})