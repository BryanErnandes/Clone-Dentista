import React from "react";
import { StyleSheet, Image, View } from "react-native";

export default function Logo(){
return(
    <View style= {styles.container}>
    <Image style= {styles.logo}
    source={require('../../assets/logo.jpg')} />
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 160,
    },

    logo: {
        height: 170,
        width: '85%',
        borderRadius: 8
    }

})