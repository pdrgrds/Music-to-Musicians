import React, { Component } from 'react';
import { View, FlatList, ImageBackground, StyleSheet, ScrollView, Text, Alert } from 'react-native';
import Variables from './../../../constants/global';
import Message from './../../../assets/data/message';
import { ComponentSearch } from './ComponentSearch';
import { ComponenItemPerfil } from './ComponentItemList';
import { ComponentMessage } from './ComponentMessage'
import { TextInput } from 'react-native-gesture-handler';

class MessageItem extends Component<any,any> {
    constructor(props:any){
        super(props)
        this.state = {
            data: {
                messages: []
            }
        }
    }

    componentDidMount(){
        const { id } = this.props.route.params;
        if(id){
          const data = Message.detalleMessage.filter((item) => item.toMessage === id);
          if(data[0]){
              this.setState({data: data[0]});
          } else {
              Alert.alert('ERROR', 'No se encontró el evento');
          }
        } else {
          Alert.alert('ERROR', 'No se encontró el evento');
        }
    }

    render(){
        const { data } = this.state;
        return(
          <ImageBackground style={styles.contenedor} source={Variables.backgroundGeneral}>
            <View style={styles.contenido}>
              <ComponentSearch />
              <ComponenItemPerfil {...data}/>
              <FlatList 
                style={styles.listMessage}
                contentContainerStyle={{ justifyContent: 'flex-end' }}
                inverted
                data={data.messages.reverse()}
                renderItem={({item}) => <ComponentMessage {...item}/>}
                ItemSeparatorComponent={() => <View style={{height: 10}}/>}
              />
              <View style={styles.contenedorInput}>
                  <TextInput style={styles.input}/>
              </View>
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
    },
    listMessage: {
        paddingHorizontal: 20
    },
    contenedorInput: {
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: 'white',
        borderRadius: 10
    },
    input: {
        backgroundColor: 'transparent',
        height: 40,
        paddingHorizontal: 15
    }
});

export default MessageItem;