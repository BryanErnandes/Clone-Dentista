import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/Entypo"
import { useNavigation } from "@react-navigation/native";

export default function Header() {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('PagPrincipal')}>
                <Image style={styles.logo} 
                    source={require('../../assets/logo.jpg')} />
            </TouchableOpacity>
            
            <View style={styles.titulo}>
                <TouchableOpacity onPress={() => navigation.navigate('PagPrincipal')}>

                    <Text style={styles.textTitulo}>Lima Odontologia</Text>

                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>

            <Icon style={styles.icons} name="add-user" size={40} color="#38CDF5" />

            </TouchableOpacity>

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
        marginRight: 25
    },
    textTitulo: {
        fontSize: 22,
        color: '#092AE6'
    },
    logo: {
        height: 60,
        width: 130
    },
    icons: {
        marginRight: 29
    }


})