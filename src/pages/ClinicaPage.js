import React from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import Nav from '../components/Nav';
import Clinica from '../components/Clinica'

export default function ClinicaPage(){
return(
    <ScrollView>
    <SafeAreaView style={styles.container}>
        <Header />
        <Nav />
        <Clinica />
    </SafeAreaView>
    </ScrollView>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff'
    }


})