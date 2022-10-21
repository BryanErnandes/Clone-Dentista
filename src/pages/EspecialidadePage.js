import React from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import Nav from '../components/Nav';
import Especialidade from '../components/Especialidade'

export default function EspecialidadePage(){
return(
    <ScrollView>
    <SafeAreaView style={styles.container}>
        <Header />
        <Nav />
        <Especialidade />
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