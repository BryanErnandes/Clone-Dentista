import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import Icon from "@expo/vector-icons/Entypo"

export default function Header(){
return(
    <View style= {styles.container}>
    <Image style= {styles.logo}
    source={require('../../assets/logo.jpg')} />
    <View style= {styles.titulo}>
    <Text style= {styles.textTitulo}>LIMA ODONTOLOGIA</Text>
    </View>
    <Icon style= {styles.icons} name="add-user" size={40} color="#38CDF5" />

    </View>
)
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 9,
     },
     titulo: {
        marginTop: 10,
        marginRight: 14
     },
     textTitulo: {
        fontSize: 18,
        color: '#092AE6'
     },
    logo: {
        height: 60,
        width: "29%"
    },
    icons: {
        marginRight: 29
    }


})