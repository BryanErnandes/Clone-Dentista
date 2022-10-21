import React from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";

export default function Clinica() {
    return (
        <ScrollView>
            <View style={styles.containerImagem}>
                <Image style={styles.logo}
                    source={require('../../assets/equipe.webp')} />
            </View>
            <View>
                <View style={styles.containerTitulo}>
                    <Text style={styles.titulo}>
                        POR QUE ESCOLHER A CLÍNICA
                    </Text>
                    <Text style={styles.titulo}>LIMA ODONTOLOGIA</Text>
                </View>
                <View style={styles.Ctexto}>
                    <Text style={styles.texto}>Nossa história de sucesso e resultados incríveis estão sendo construídos desde 2013, na cidade de Bauru, interior de São Paulo, através da constante preocupação em atender nossos pacientes de forma totalmente humanizada e personalizada, oferecendo muito mais do que um simples atendimento odontológico, mas sim a melhor experiência já vivida em uma clínica odontológica.</Text>
                </View>
            </View>
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>Conforto, Tecnologia, Segurança e Alto Grau de Especialização!</Text>
            </View>
            <View style={styles.containerImagens}>
                <View style={styles.imagens}>
                    <Image style={styles.imagem}
                        source={require('../../assets/esterilizacao.webp')} />
                </View>
                <View style={styles.imagens}>
                    <Image style={styles.imagem}
                        source={require('../../assets/comforto.webp')} />
                </View>
                <View style={styles.imagens}>
                    <Image style={styles.imagem}
                        source={require('../../assets/cardeira.webp')} />
                </View>
            </View >
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>Com a palavra dos nossos queridos pacientes!</Text>
            </View>
            <View style={[styles.card, styles.shadowProp]}>
                <Text style={styles.cardTitulo}>Henrigue Moraes</Text>
                <View style={styles.cardComentario}>
                    <Text style={styles.comentario}>Boa tarde, respondendo a sua pesquisa: estrutura, ambiente agradável, transmite paz, tranquilidade, salas confortáveis, uma estética moderna e equipamentos modernos. Nota 10. Atendimento 10, simpatia e muito respeito, recepcionista 10, dentista avaliador, 1000 exepcional.</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerImagem: {
        marginBottom: 9,
    },
    logo: {
        height: 280,
        width: '100%',
        resizeMode: 'stretch',
    },
    containerImagens: {
        justifyContent: 'center'
    },
    containerTitulo: {
        padding: 7,
        textAlign: 'center'
    },
    titulo: {
        fontSize: 25,
        width: '100%',
        color: '#38CDF5'
    },
    Ctexto: {
        paddingTop: 10,
        paddingRight: 34,
        paddingLeft: 34,
        paddingBottom: 10,
        width: '100%',
        color: '#765DFC'
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#765DFC'
    },
    imagens: {
        marginBottom: 5,
        paddingRight: 1,
        paddingLeft: 8,
    },
    imagem: {
        width: '98%',
        height: 230,
        borderRadius: 16
    },
    cardTitulo: {
        textAlign: 'center',
        fontSize: 30,
        width: '100%',
        color: '#C944FA'
    },
    cardComentario: {
        paddingTop: 10,
        paddingBottom: 10,
        width: '100%',
    },
    comentario: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#765DFC'
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: '97%',
        marginVertical: 10,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 4, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
})