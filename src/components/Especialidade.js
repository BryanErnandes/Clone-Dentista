import React from "react";
import { StyleSheet, Image, View, Text, ScrollView } from "react-native";

export default function Especialidade() {
    return (
        <View style={styles.container}>
            <View style={styles.especialidades}>
                <Text style={styles.textEspecialidades}>Conheça nossas especialidades! </Text>
            </View>
            <View style={styles.card}>
                <View style={styles.containerImage}>
                    <Image style={styles.image}
                        source={require('../../assets/protocolo.webp')} />
                </View>
                <View style={styles.containerText}>
                    <View style={styles.containerText}>
                        <Text style={styles.textTitulo}>Prótese Protocolo</Text>
                    </View>
                    <View>
                        <Text style={styles.textCard}>A prótese protocolo é a solução mais viável para quem cansou das dentaduras ou para aqueles que nem querem pensar na prótese convencional.</Text>
                    </View>
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.containerImage}>
                    <Image style={styles.image}
                        source={require('../../assets/implantes.webp')} />
                </View>
                <View style={styles.containerText}>
                    <View style={styles.containerText}>
                        <Text style={styles.textTitulo}>Implantes Dentários</Text>
                    </View>
                    <View tyle={styles.textTitulo}>
                        <Text style={styles.textCard}>A perda de dentes pode gerar problemas bucais e impactar na autoestima da pessoa que por algum motivo perdeu um ou mais dentes.</Text>
                    </View>
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.containerImage}>
                    <Image style={styles.image}
                        source={require('../../assets/dentarias.webp')} />
                </View>
                <View style={styles.containerText}>
                    <View style={styles.containerText}>
                        <Text style={styles.textTitulo}>
                            Próteses Dentárias</Text>
                    </View>
                    <View tyle={styles.textTitulo}>
                        <Text style={styles.textCard}>Os dentes são muito importantes para a nossa saúde, além de ajudar na nossa fala e mastigação e são essenciais para um sorriso sempre bonito.</Text>
                    </View>
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.containerImage}>
                    <Image style={styles.image}
                        source={require('../../assets/Ortodontia.webp')} />
                </View>
                <View style={styles.containerText}>
                    <View style={styles.containerText}>
                        <Text style={styles.textTitulo}>
                            Próteses Dentárias</Text>
                    </View>
                    <View tyle={styles.textTitulo}>
                        <Text style={styles.textCard}>Dentes tortos, mordida cruzada, mordida aberta, diastema. Todos esses são problemas na dentição que precisam ser corrigidos por um dentista especializado em Ortodontia.</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerImage: {
        paddingRight: 5,
        paddingLeft: 10

    },
    card: {
        paddingBottom: 20
    },
    especialidades: {
        alignItems: 'center',
        padding: 10,
    },
    textEspecialidades: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#765DFC'


    },
    image: {
        height: 250,
        width: '98%',
        resizeMode: 'stretch',
        borderRadius: 17
    },
    containerText: {
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        paddingRight: 10,
        paddingLeft: 10

    },
    textTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#765DFC'
    },
    textCard: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#689FF7'
    },
    },



)