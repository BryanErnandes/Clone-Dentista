import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function Login() {

    const navigation = useNavigation()

    const [del1, setDel1] = React.useState('')
    const [del2, setDel2] = React.useState('')

    const deleta = () => {
        setDel1('')
        setDel2('')
    }

    return (
        <View style={styles.container}>
            <View style={styles.titulo}>
                <Text style={styles.textTitulo}>Bem-Vindo</Text>
            </View>

            <View style={styles.form}>
                <TextInput style={styles.input} placeholder="Usuario" value={del1} onChangeText={setDel1} />
                <TextInput style={styles.input} placeholder="Senha" value={del2} onChangeText={setDel2} />
            </View>

            <View style={styles.buttom}>
                <TouchableOpacity style={styles.botao1} onPress={() => navigation.navigate('PagPrincipal')}>
                    <Text style={styles.textBotao}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao2} onPress={() => deleta()}>
                    <Text style={styles.textBotao}>Limpa</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao3} onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.textBotao}>Cadastro</Text>
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
    botao1: {
        marginRight: 2,
        backgroundColor: '#013DF5',
        height: 50,
        width: '30%',
        borderRadius: 9
    },
    botao2: {
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#D4492C',
        height: 50,
        width: '30%',
        borderRadius: 9
    },
    botao3: {
        marginRight: 3,
        backgroundColor: '#E323F9',
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