import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/Header";
import Nav from '../components/Nav';
import Clinica from '../components/Clinica'

export default function PagPrincipal(){
return(
    <SafeAreaView style={styles.container}>
        <Header />
        <Nav />
        <Clinica />
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    }


})