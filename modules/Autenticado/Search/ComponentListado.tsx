import React from 'react';
import { View, StyleSheet, ImageBackground, TouchableHighlight, Text, Image } from 'react-native';
import Variables from './../../../constants/global';

const returnStar = (numero:number) => {
    const ArrayStar = [];
    for(let i = 0; i < numero; i++){
        ArrayStar.push(<Image source={Variables.iconStar} style={styles.iconStar}/>);
    }

    return ArrayStar;
}

export const ItemListadoList = (props:any) => {

    return(
        <TouchableHighlight>
            <ImageBackground style={styles.container} source={props.urlImagen}>
                <View style={styles.containerText}>
                    <Text style={[styles.colorText, styles.titleText]}>{props.titulo}</Text>
                    <Text style={[styles.colorText]}>{props.descripcion}</Text>
                    
                    <View style={[styles.groupStar]}>
                        {
                            returnStar(props.numberStar)
                        }
                    </View>
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
    },
    groupStar: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        right: 0,
        top: 7,
        marginRight: 15
    },
    iconStar: {
        height: 20,
        width: 20,
        marginRight: 5
    }
});