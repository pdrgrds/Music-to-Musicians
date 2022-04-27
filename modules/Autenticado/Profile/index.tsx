import React, { Component } from 'react';
import { View, FlatList, ImageBackground, StyleSheet, ScrollView, Text, Image, Button, Alert } from 'react-native';
import ComponentAccordion from './ComponentAccordion';
import Variables from './../../../constants/global';
import data from './../../../assets/data/perfil';
import * as Actions from '../../../redux/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 

class Perfil extends Component<any,any> {
    constructor(props:any){
        super(props)
        this.state = {

        }
    }

    render(){
      const { AREMOVE_INFO_USER } = this.props;
        return(
          <ImageBackground style={styles.contenedor} source={Variables.backgroundGeneral}>
            <ScrollView style={styles.contenido}>
              <View style={stylesPage1.contenedor}>
                <Image style={stylesPage1.perfil} source={data.urlImagenPerfil}/>
                <View style={stylesPage1.separator}/>
                <View style={stylesPage1.contentText}>
                  <Text numberOfLines={1} style={[stylesText.color, stylesText.bold, stylesText.fontSize24]} >{data.nombreUsuario}</Text>
                  <Text numberOfLines={2} style={[stylesText.color]} >{data.descripcionCategoria}</Text>
                  <View style={stylesPage1.separator2}/>
                  <Text style={[stylesText.color, stylesText.bold]} >Generos</Text>
                  <Text style={[stylesText.color]}>
                    {
                      data.Genero?.map((item, index) => index !== data.Genero.length ? `${item}, ` : item)
                    }
                  </Text>
                </View>
              </View>

              <View style={stylesPage2.contenedor}>
                <Text style={[stylesText.color, stylesText.bold, stylesText.fontSize18]}>Sobre mi</Text>
                <Text style={[stylesText.color]}>{data.descripcionUsuario}</Text>
              </View>

              <View>
                <ComponentAccordion name='Mis Proyectos' items={[]}/>
                <ComponentAccordion name='Contacto' items={[]}/>
                <ComponentAccordion name='Género' items={data.Genero}/>
                <ComponentAccordion name='Mi tablero' items={[]}/>
              </View>

              <View style={stylesPage3.contenedor}>
                <View style={stylesPage3.content}>
                  <Image style={{height: 30, width: 30}} source={Variables.iconCV}/>
                  <Text style={[stylesText.color, stylesText.fontSize12]}>Ver mi CV</Text>
                </View>

                <View style={stylesPage3.content}>
                  <Image style={{height: 30, width: 30}} source={Variables.iconCalendar2}/>
                  <Text style={[stylesText.color, stylesText.fontSize12]}>Mis eventos</Text>
                </View>

                <View style={stylesPage3.content}>
                  <Image style={{height: 30, width: 30}} source={Variables.iconGallery}/>
                  <Text style={[stylesText.color, stylesText.fontSize12]}>Mi galeria</Text>
                </View>

                <View style={stylesPage3.content}>
                  <Image style={{height: 30, width: 30}} source={Variables.iconSettings}/>
                  <Text style={[stylesText.color, stylesText.fontSize12]}>Configuración</Text>
                </View>
              </View>
              <View>
                <Button onPress={() => AREMOVE_INFO_USER()} title='Cerrar sesión'/>
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
    contenido: {
        flex: 1,
        backgroundColor: "rgba(22, 22, 22, 0.9)",
    }
});

const stylesPage1 = StyleSheet.create({
  contenedor: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20
  },
  perfil: {
    width: 150,
    height: 150,
    borderRadius: 75
  },
  contentText: {
    display: 'flex',
    justifyContent: 'center'
  },
  separator: {
    width: 25
  },
  separator2: {
    height: 20
  }
});

const stylesPage2 = StyleSheet.create({
  contenedor: {
    marginHorizontal: 20,
    marginTop: 20
  },
});

const stylesPage3 = StyleSheet.create({
  contenedor: {
    marginHorizontal: 20,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50
  },
  content: {
    backgroundColor: '#FF4A4A',
    paddingVertical: 8,
    height: 70,
    width: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  }
});

const stylesText = StyleSheet.create({
  color: {
    color: 'white'
  },
  bold: {
    fontWeight: 'bold'
  },
  fontSize24: {
    fontSize: 24
  },
  fontSize18: {
    marginBottom: 8,
    fontSize: 18
  },
  fontSize12: {
    fontSize: 12
  }
});

function mapDispatchToProps(dispatch:any) {
  const { AREMOVE_INFO_USER } = Actions;
  return bindActionCreators({
    AREMOVE_INFO_USER
  }, dispatch)
}

/*const mapStateToProps = (state: any) => ({
  moduleState: state.statusModule.status
})*/

export default connect(null, mapDispatchToProps)(Perfil);