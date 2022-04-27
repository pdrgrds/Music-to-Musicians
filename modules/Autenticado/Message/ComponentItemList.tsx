import React from 'react';
import { View, Image, Text, TouchableHighlight, StyleSheet } from 'react-native';

export const ComponentItemList = (props:any) => {
    const { id, reDirect } = props;
    return(
        <TouchableHighlight onPress={() => reDirect('ItemMessage', { id })}>
            <View style={styles.contenedor}>
                <Image source={props.urlImagenPerfil} style={styles.imgPerfil} />
                <View style={styles.separator}/>
                <View style={styles.informacion}>
                    <Text numberOfLines={1} style={[stylesText.color, stylesText.fontSize14]}>{props.nombreUsuario}</Text>
                    <Text numberOfLines={2} style={[stylesText.color, stylesText.fontSize12]}>{props.ultimoMensaje}</Text>
                </View>
                { !props.ultimoMensajeLeido && <View style={styles.newNotify}/> }
            </View>
        </TouchableHighlight>
    )
}

export const ComponenItemPerfil = (props:any) => {
    return(
        <View style={styles.contenedor2}>
            <Image source={props.urlImagenPerfil} style={styles.imgPerfil2} />
            <View style={styles.separator}/>
            <View style={styles.informacion}>
                <Text numberOfLines={1} style={[stylesText.color, stylesText.fontSize14]}>{props.nombreUsuario}</Text>
                <Text numberOfLines={2} style={[stylesText.color, stylesText.fontSize12]}>{props.descripcionUsuario}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#707070',
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    contenedor2: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    imgPerfil: {
        height: 60,
        width: 60,
        borderWidth: 2,
        borderRadius: 30
    },
    imgPerfil2: {
        height: 52,
        width: 52,
        borderWidth: 2,
        borderRadius: 26
    },
    separator: {
        width: 15
    },
    informacion: {
        width: '70%'
    },
    newNotify: {
        backgroundColor: '#CC2014',
        height: 12,
        width: 12,
        borderRadius: 6,
        position: 'absolute',
        right: 20,
        top: '60%'
    }
});

const stylesText = StyleSheet.create({
    color: {
        color: 'white',
        fontWeight: '500'
    },
    fontSize14: {
        fontSize: 14
    },
    fontSize12: {
        fontSize: 12
    }
})