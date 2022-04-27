import React, { Component } from 'react';
import { View, ScrollView, ImageBackground, StyleSheet, Text, Alert, Image } from 'react-native';
import Variables from './../../../constants/global';
import evento from '../../../assets/data/evento';

class Detail extends Component<any,any> {
    constructor(props:any){
        super(props)
        this.state = {
            data: {

            }
        }
    }

    componentDidMount(){
        const { id } = this.props.route.params;
        if(id){
          const data = evento.filter((item) => item.id === id);
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
        console.log(this.props.route.params, "<-ID")
        console.log(this.state.data);
        return(
            <ImageBackground style={[styles.contenedor]} source={Variables.backgroundGeneral}>
                <ScrollView style={styles.detalle}>
                    <Image source={data.urlImagen} resizeMode='cover' style={styles.logo} />
                    
                    <View style={[styles.grupoInfo, styles.group1]}>
                        <View style={[styles.centerContent]}>
                            <Text style={[stylesText.colorLetra, stylesText.diaFecha]}>{data.diaFecha}</Text>
                            <Text style={[stylesText.colorLetra, stylesText.mesFecha]}>{data.mesFecha}</Text>
                        </View>
                        <View style={stylesExtra.space}/>
                        <View style={styles.descripcion}>
                            <Text style={[stylesText.colorLetra, stylesText.colorBold]}>{data.titulo}</Text>
                            <Text style={[stylesText.colorLetra, stylesText.letraTipo12, stylesText.descripcion]} numberOfLines={2} >{data.descripcion}</Text>
                            <Text style={[stylesText.colorLetra, stylesText.letraTipo12]}>{data.tipoEntrada}</Text>
                        </View>
                    </View>

                    <View style={stylesExtra.lineaSeccion}/>
                    
                    <View style={[styles.grupoInfo, styles.group2]}>
                      <View style={[styles.groupContent]}>
                        <Image source={Variables.iconLikes}/>
                        <Text style={[stylesText.colorLetra, stylesText.letraIconos, stylesText.letraTipo12]}>{data.numeroLikes} likes</Text>
                      </View>
                      <View style={[styles.groupContent]}>
                        <Image source={Variables.iconCalendar}/>
                        <Text style={[stylesText.colorLetra, stylesText.letraIconos, stylesText.letraTipo12]}>Agendar</Text>
                      </View>
                      <View style={[styles.groupContent]}>
                        <Image source={Variables.iconUser}/>
                        <Text style={[stylesText.colorLetra, stylesText.letraIconos, stylesText.letraTipo12]}>Conoce al artista</Text>
                      </View>
                    </View>

                    <View style={stylesExtra.lineaSeccion}/>

                    <View style={[styles.grupoInfo, styles.group3]}>
                        <View style={[styles.group3Content]}>
                            <Image source={Variables.iconTime} />
                            <View>
                                <Text style={[stylesText.colorLetra, stylesText.letraIconos, stylesText.letraTipo14]}>Fecha Evento</Text>
                                <Text style={[stylesText.colorLetra, stylesText.letraIconos, stylesText.letraTipo12]}>{data.fechaLargo}</Text>
                            </View>
                        </View>
                        <View style={[styles.group3Content]}>
                            <Image source={Variables.iconMap} />
                            <View>
                                <Text style={[stylesText.colorLetra, stylesText.letraIconos, stylesText.letraTipo14]}>Lugar del evento</Text>
                                <Text style={[stylesText.colorLetra, stylesText.letraIconos, stylesText.letraTipo12]}>{data.lugar}</Text>
                            </View>
                        </View>
                        <View style={[styles.group3Content]}>
                            <Image source={Variables.iconMusic} />
                            <View>
                                <Text style={[stylesText.colorLetra, stylesText.letraIconos, stylesText.letraTipo14]}>Músico/Banda</Text>
                                <Text style={[stylesText.colorLetra, stylesText.letraIconos, stylesText.letraTipo12]}>{data.nombreMusico}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1
    },
    logo: {
        width: '100%'
    },
    detalle: {
        backgroundColor: 'rgba(22, 22, 22, 0.9)',
        flex: 1
    },
    grupoInfo: {
      paddingHorizontal: 30,
      paddingVertical: 20
    },
    centerContent: {
        alignItems: 'center',
        display: 'flex'
    },
    group1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    descripcion: {
        flexWrap: 'wrap',
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        paddingTop: 8
    },
    group2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    groupContent: {
        display: 'flex',
        flexDirection: 'row'
    },
    group3: {

    },
    group3Content: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center'
    }
});

const stylesExtra = StyleSheet.create({
    space: {
        width: 25
    },
    lineaSeccion: {
        width: '100%',
        borderWidth: 0.5,
        borderColor: '#707070',
        height: 1
    }
})

const stylesText = StyleSheet.create({
    diaFecha: {
        fontWeight: 'bold',
        fontSize: 40
    },
    mesFecha: {
        fontWeight: 'bold',
        fontSize: 15
    },
    colorLetra:{
        color: 'white'
    },
    colorBold: {
        fontWeight: 'bold'
    },
    letraTipo12: {
        fontSize: 12
    },
    letraTipo14: {
        fontSize: 14
    },
    descripcion: {
        height: 30
    },
    letraIconos: {
        marginLeft: 8,
        marginRight: 25
    }
})

export default Detail;