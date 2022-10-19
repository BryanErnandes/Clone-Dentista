import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import Icon from "@expo/vector-icons/Entypo";
import Icons from "@expo/vector-icons/FontAwesome";

export default function Nav(){
return(
    <View style= {styles.container}>
     <View style= {styles.icon}>
     <Icons style={styles.whats} name="whatsapp" size={33} color="#37F54B" />
        <Text style={styles.texto}>(14) 00000-0000</Text>
     </View>
     <View style= {styles.icons}>
     <Icon style={styles.pin} name="location-pin" size={33} color="#38CDF5" />
        <Text style={styles.texto}>Rua Avenida da Souza</Text>
     </View>

    </View>
)
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 5,
        justifyContent: 'space-between',
        margin: 17
     },
     icon: {
        flexDirection: 'row',
        marginRight: 10
     },
     icons: {
        flexDirection: 'row',
        marginRight: 10
     },
    whats:{
        marginRight: 5

    },
    pin:{
        marginLeft: 2
    },
    texto: {
        fontSize: 18
    }

})