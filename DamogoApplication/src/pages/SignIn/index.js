import React from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Logo } from '../../assets'

const SignIn = () => {
    return (
        <View>
            <Logo />
            <Text>Login</Text>
            <TextInput>Kata sandi</TextInput>
            <TouchableOpacity 
                style={styles.button}>
                <Text>Masuk</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button2}>
                <Text>Daftar sebagai mitra</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignIn;

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        width: 382,
        height: 48,
        borderRadius: 3,
        left: 16,
        backgroundColor: "#00A3E0",
        padding: 10
      },
    button2: {
        alignItems: "center",
        backgroundColor: "#FFFFFFFF"
    }
})
