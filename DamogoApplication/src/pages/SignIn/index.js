import React from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Logo } from '../../assets'

const SignIn = () => {
    return (
        <View>
            <View style={styles.logo}>
                <Logo />
            </View>
            <View style={styles.login}>
                <Text style={styles.txtLogin}>Loginn</Text>
            </View>
            
            <TextInput 
                style={styles.txtInput}
                placeholder="Username"></TextInput>
            <View styles={{color: "yellow"}}>
                <TextInput 
                style={styles.txtInput}
                placeholder="Kata Sandi"></TextInput>
            </View>

            <TouchableOpacity 
                style={styles.button}
                >
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
    logo :{ 
        backgroundColor: "red",
        alignItems: 'center',
        marginTop: 137,
    },
    login: {
        marginTop: 38,
        backgroundColor: 'pink'
    },
    txtLogin: {
        fontSize: 28,
        fontWeight: "700",
    },
    button: {
        alignItems: "center",
        width: 382,
        height: 48,
        borderRadius: 3,
        backgroundColor: "#00A3E0",
        padding: 10,
        justifyContent: 'center'
      },
    button2: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#FFFFFFFF"
    },
    txtInput: {
        alignItems: 'center',
        fontSize: 18,
        textDecorationLine: 'underline'
    }
})
