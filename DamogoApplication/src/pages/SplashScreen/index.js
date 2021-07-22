import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Logo } from '../../assets'

const SplashScreen = () => {
    return (
        <View style ={{
            flex: 1,
            justifyContent:'center',
            alignItems: 'center'
            }}>
            <Logo />
            <View style={{height: 19}} />
            <Text>Create taste, not waste</Text>
        </View>
    );
}

export default SplashScreen;

const styles = StyleSheet.create({})
