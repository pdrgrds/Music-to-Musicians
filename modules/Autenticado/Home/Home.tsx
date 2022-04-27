import React, { Component } from 'react';
import { View, FlatList, ImageBackground, StyleSheet } from 'react-native';
import Variables from './../../../constants/global';
import ItemListado from './ComponentListado';
import evento from '../../../assets/data/evento';

class Home extends Component<any,any> {
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
                        data={evento} 
                        renderItem={({item}) => <ItemListado {...item} reDirect={this.props.navigation.navigate}/>}
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

export default Home;