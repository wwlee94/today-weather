import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';

export default function Loading() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' />
            <AnimatedLoader 
                visible={true}
                source={require('./loading.json')}
                animationStyle={styles.lottie}
                speed={1}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA"
    },
    text:{
        color: '#2c2c2c',
        fontSize: 30
    },
    lottie:{
        width: 100,
        height: 100
    }
});