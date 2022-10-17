import React from "react";
import Logo from '../components/Logo';
import FormCadastro from '../components/FormCadastro';
import { SafeAreaView, StyleSheet } from "react-native";

export default function Cadastro(){
return(
    <SafeAreaView style={styles.container}>
    <Logo />
    <FormCadastro />
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    }
    })