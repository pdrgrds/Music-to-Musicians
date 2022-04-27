import React from 'react';
import { View, StyleSheet, ImageBackground, TouchableHighlight, Text } from 'react-native';

const ItemListado = (props:any) => {
    return(
        <TouchableHighlight onPress={() => props.reDirect('Detail', { id: props.id })}>
            <ImageBackground style={styles.container} source={props.urlImagen}>
                <View style={styles.containerText}>
                    <Text style={[styles.colorText, styles.titleText]}>{props.titulo}</Text>
                    <Text style={[styles.colorText]}>{props.fecha}</Text>
                    <Text style={[styles.colorText]} numberOfLines={1} >{props.descripcion}</Text>
                </View>
            </ImageBackground>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 200,
        width:'100%'
    },
    containerText: {
        backgroundColor: 'rgba(0, 0, 0, 0.64)',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 70,
        paddingVertical: 5,
        paddingHorizontal: 20
    },
    colorText: {
        color: 'white'
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default ItemListado