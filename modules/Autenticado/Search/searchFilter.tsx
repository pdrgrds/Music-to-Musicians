import React, { Component } from 'react';
import { View, FlatList, ImageBackground, StyleSheet, ScrollView, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Variables from './../../../constants/global';
import { RadioButton } from 'react-native-paper';
import searchFilter from '../../../assets/data/searchFilter';
import { CRadioButton } from './ComponentRadio'

class Filter extends Component<any,any> {
    constructor(props:any){
        super(props)
        this.state = {

        }
    }

    render(){

        return(
        <ScrollView style={styles.contenedor}>
            <ImageBackground style={styles.contenedor} source={Variables.backgroundGeneral}>
                <View style={styles.contenedorFilter}>
                    <View style={styles.filters}>
                        <Text style={[styles.textoGenerico]}>Filtros</Text>
                        <TextInput style={styles.inputSearch} placeholder='Lugar'/>
                        <TextInput style={styles.inputSearch} placeholder='Genero'/>
                        <View style={styles.separator}/>
                        <Text style={[styles.textoGenerico]}>Proximidad</Text>
                        <Text style={[styles.textoGenerico]}>Ordenar por:</Text>
                        <RadioButton.Group onValueChange={(value) => console.log(value)} value={''}>
                            {
                                searchFilter.map((item)=> <CRadioButton {...item} />)
                            }
                        </RadioButton.Group>
                        <View style={styles.separator}/>
                        <View style={styles.separator}/>
                        <Button color='#CC2014' onPress={() => null} title='Aplicar Filtro'/>
                        <View style={styles.separator}/>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1
    },
    textoGenerico: {
        color: 'white',
        fontWeight: 'bold'
    },
    separator: {
        height: 20
    },
    radio: {
        display: 'flex',
        flexDirection: 'row'
    },
    inputSearch: {
        backgroundColor: 'white',
        height: 40,
        borderWidth: 1,
        borderColor: '#707070',
        borderRadius: 5,
        marginVertical: 10,
        paddingHorizontal: 20
    },
    contenedorFilter: {
        backgroundColor: 'rgba(0, 0, 9, 0.9)',
        flex: 1,
        paddingTop: 20,
        display: 'flex',
        alignItems: 'center'

    },
    filters: {
        width: '70%'
    }
});

export default Filter;