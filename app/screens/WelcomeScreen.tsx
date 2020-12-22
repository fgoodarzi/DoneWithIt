import React from 'react';
import { ImageBackground, View, Image, Text, StyleSheet } from 'react-native';

import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require('../assets/background.jpg')}>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text style={styles.text}>Sell What You Don't Need.</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.primary,
    },    
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.secondary,
    },
    logoContainer: {
        position: 'absolute',
        top: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    text: {
        marginTop: 24,
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default WelcomeScreen;