import React, { Component } from 'react';
import { View, FlatList, ImageBackground, StyleSheet, ScrollView, Text } from 'react-native';
import Variables from './../../../constants/global';
import { ItemListadoList } from './ComponentListado';
import searchLista from '../../../assets/data/searchLista';

class Lista extends Component<any,any> {
    constructor(props:any){
        super(props)
        this.state = {

        }
    }

    render(){

        return(
        <View>
            <ImageBackground source={Variables.backgroundGeneral}>
                <FlatList 
                    ItemSeparatorComponent={() => <View style={styles.separator}/>} 
                    data={searchLista} 
                    renderItem={({item}) => <ItemListadoList {...item}/>}
                />
            </ImageBackground>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    separator: {
        height: 30,
        backgroundColor: 'rgba(22, 22, 22, 0.9)'
    }
});

export default Lista;