import React from 'react';
import { ImageBackground, View, StyleSheet, Text, Image, ScrollView } from "react-native";
import Varibles from './../../constants/login';

class TemplateInit extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
          <View style={styles.container}>
            <ImageBackground source={Varibles.backgroundImage} resizeMode='cover' style={styles.backgroundImage}>
                <View style={styles.contenido}>
                    <Image source={Varibles.logoImage} style={styles.logoImage} width={267}/>
                    <ScrollView>
                      {this.props.children}
                    </ScrollView>
                </View>
            </ImageBackground>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundImage: {
      flex: 1
    },
    contenido: {
      flex: 1,
      backgroundColor: "rgba(22, 22, 22, 0.9)",
      alignItems: "center"
    },
    logoImage: {
      marginVertical: 60
    }
});

export default TemplateInit;