import React from 'react';
import { View, Image, Text, TouchableHighlight, StyleSheet } from 'react-native';

export const ComponentItemList = (props:any) => {
    return(
        <TouchableHighlight key={props.id}>
            <View style={styles.contenedor}>
                <Image source={props.urlImagenPerfil} style={styles.imgPerfil} />
                <View style={styles.separator}/>
                <View style={styles.informacion}>
                    <Text numberOfLines={1} style={[stylesText.color, stylesText.fontSize14]}>{props.title}</Text>
                    <Text numberOfLines={2} style={[stylesText.color, stylesText.fontSize12]}>{props.descripcion}</Text>
                </View>
            </View>
        </TouchableHighlight>
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
    imgPerfil: {
        height: 60,
        width: 60,
        borderWidth: 2,
        borderRadius: 30
    },
    separator: {
        width: 15
    },
    informacion: {
        width: '70%'
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