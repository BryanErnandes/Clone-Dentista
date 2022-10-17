import React from "react";
import Logo from '../components/Logo';
import FormLogin from '../components/FormLogin';
import { SafeAreaView, StyleSheet } from "react-native";

export default function Login(){
return(
    <SafeAreaView  style={styles.container}>
    <Logo />
    <FormLogin />
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    }
    })