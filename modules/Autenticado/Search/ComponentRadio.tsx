import React from 'react';
import { Text, RadioButton } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

export const CRadioButton = (props:any) => {

    return(
        <View key={props.id} style={styles.radio}>
            <RadioButton  
                color={'white'} 
                uncheckedColor={'white'}
                value={`${props.value}`} 
            />
            <Text style={styles.textoGenerico}>{props.nombre}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    radio: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textoGenerico: {
        color: 'white',
        fontWeight: 'bold'
    }
})