import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";

export default function Cadastro() {
    return (
        <View style={styles.container}>
            <View style={styles.titulo}>
                <Text style={styles.textTitulo}>Cadastre-se</Text>
            </View>

            <View style={styles.form}>
                <TextInput style={styles.input} placeholder="Nome" />
                <TextInput style={styles.input} placeholder="Email" />
                <TextInput style={styles.input} placeholder="Senha" />
            </View>

            <View style={styles.buttom}>
                <TouchableOpacity style={styles.botao1}>
                    <Text style={styles.textBotao}>Cadastra</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao2}>
                    <Text style={styles.textBotao}>Limpa</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titulo: {
        textAlign: 'center'
    }, 
    textTitulo: {
        fontSize: 40,
        marginTop: 10,
        fontWeight: 'bold'
    },
    form: {
        alignItems: 'center'
    },

    input: {
        width: '95%',
        marginTop: 20,
        marginBottom: 1,
        padding: 10,
        fontSize: 26,
        backgroundColor: '#FFFFFFF',
        color: '#0000000',
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: '#0000000',
        borderRadius: 9
    },
    buttom: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    botao: {
        marginRight: 20,
        backgroundColor: '#013DF5',
        height: 50,
        width: '30%',
        borderRadius: 9
    },
    botao1: {
        marginRight: 20,
        backgroundColor: '#013DF5',
        height: 50,
        width: '30%',
        borderRadius: 9
    },
    botao2: {
        marginRight: 20,
        backgroundColor: '#D4492C',
        height: 50,
        width: '30%',
        borderRadius: 9
    },
    textBotao: {
        textAlign: 'center',
        paddingTop: 8,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff'
    }


})