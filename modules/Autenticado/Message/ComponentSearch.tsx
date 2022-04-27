import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export const ComponentSearch = () => {
    return(
        <View style={styles.Search}>
            <View style={styles.contenedorSearch}>
                <TextInput style={styles.inputSearch} placeholder='Buscar contacto'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Search: {
        backgroundColor: '#161616',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contenedorSearch: {
        width: '80%',
        backgroundColor: 'transparent',
        paddingVertical: 20
    },
    inputSearch: {
        width: '100%',
        backgroundColor: 'white',
        height: 40,
        borderWidth: 1,
        borderColor: '#707070',
        borderRadius: 5,
        paddingHorizontal: 20
    }
  })