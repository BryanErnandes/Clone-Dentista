import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/Header";
import Nav from '../components/Nav';
import Especialidade from '../components/Especialidade'

export default function EspecialidadePage(){
return(
    <SafeAreaView style={styles.container}>
        <Header />
        <Nav />
        <Especialidade />
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    }


})