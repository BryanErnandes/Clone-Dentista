import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/Header";
import Nav from '../components/Nav';
import Contato from '../components/Contato'

export default function ContatoPage(){
return(
    <SafeAreaView style={styles.container}>
        <Header />
        <Nav />
        <Contato />
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    }


})