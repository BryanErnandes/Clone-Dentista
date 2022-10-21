import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Logo from '../components/Logo';
import FormLogin from '../components/FormLogin';

export default function Login() {
    return (
        <SafeAreaView style={styles.container}>
            <Logo />
            <FormLogin />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})