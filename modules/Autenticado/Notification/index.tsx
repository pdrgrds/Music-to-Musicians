import React, { Component } from 'react';
import { View, FlatList, ImageBackground, StyleSheet, ScrollView, Text } from 'react-native';
import Variables from './../../../constants/global';
import Notificacion from './../../../assets/data/notificacion';
import { ComponentItemList } from './ComponentItemList';

class ListaNotificacion extends Component<any,any> {
    constructor(props:any){
        super(props)
        this.state = {

        }
    }

    render(){
      const { navigate } = this.props.navigation
        return(
          <ImageBackground style={styles.contenedor} source={Variables.backgroundGeneral}>
            <View style={styles.contenido}>
              <FlatList 
                data={Notificacion}
                renderItem={({item}) => <ComponentItemList {...item} reDirect={navigate}/>}
              />
            </View>
          </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1
    },
    contenido: {
        flex: 1,
        backgroundColor: "rgba(22, 22, 22, 0.9)"
    }
});

export default ListaNotificacion;