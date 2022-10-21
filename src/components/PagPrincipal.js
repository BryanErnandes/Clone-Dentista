import React from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";

export default function PagPrincipal() {
    return (
        <ScrollView>
            <View style={styles.menu}>
                <View tyle={styles.menu}>
                    <Image style={styles.image}
                        source={require('../../assets/dentista.jpg')} />
                </View>

                <View style={styles.titulo}>
                    <Text style={styles.textoTitulo}>Quem somos</Text>
                </View>

                <View style={styles.containerMain}>
                    <View style={styles.Main}>
                        <Text style={styles.textoMain}>Uma das melhores Clínicas Odontológicas em Bauru</Text>
                    </View>

                    <View style={styles.Main}>
                        <Text style={styles.textoMain}>Nossa grande paixão é devolver e manter o sorriso de nossos pacientes! Somos apaixonados pelo que fazemos!</Text>
                    </View>

                    <View style={styles.Main}>
                        <Text style={styles.textoMain}>Nosso propósito é oferecer saúde, bem-estar, conforto e segurança por meio de tratamentos odontológicos humanizados e programas preventivos personalizados</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <Image style={styles.imageCard}
                        source={require('../../assets/sorriso6.jpg')} />
                    <View>
                        <Text style={styles.cardTitulo}>Prótese Protocolo</Text>
                        <Text style={styles.textoCard}>A prótese protocolo é a solução mais viável para quem cansou das dentaduras ou para aqueles que nem querem pensar na prótese convencional.</Text>
                    </View>
                </View>
                   <View style={styles.titulo}>
                    <Text style={styles.textoTitulo}>Tratamentos</Text>
                   </View>
                <View style={styles.card}>
                    <Image style={styles.imageCard}
                        source={require('../../assets/sorriso2.png')} />
                    <View>
                        <Text style={styles.cardTitulo}>Implantes Dentários</Text>
                        <Text style={styles.textoCard}>
                            Os implantes dentários são atualmente a melhor solução para que o paciente volte a ter confiança e segurança ao sorrir
                        </Text>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: 200,
        width: '100%',
        marginLeft: 2,
        marginRight: 2,
        borderRadius: 13    ,
        resizeMode: 'stretch',
    },
    titulo: {
        textAlign: 'center',
        margin: 10
    },
    textoTitulo: {
        fontSize: 27,
        fontWeight: 'bold',
        color: '#38CDF5'
    },
    containerMain: {
        marginBottom: 20,
        width: "98%",
        textAlign: 'center'
    },
    Main: {
        marginBottom: 9
    },
    textoMain: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#765DFC'
    },
    card: {
        border: 1,
        marginTop: 5,
        marginLeft: 20,
        marginBottom: 8
    },
    imageCard: {
        height: 200,
        width: '95%',
        margin: 2,
        borderRadius: 15,
    },
    cardTitulo: {
        textAlign: 'center',
        fontSize: 23,
        color: '#38CDF5',
        fontWeight: 'bold',
        padding: 8
    },
    textoCard: {
        fontSize: 17,
        fontWeight: 'bold',
        width: '98%',
        color: '#689FF7'
    },
})