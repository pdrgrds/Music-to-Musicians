import React from 'react';
import { ImageBackground, View, StyleSheet, Text, SafeAreaView, TextInput, Button, Alert } from 'react-native';
import { LoginManager, AccessToken, LoginBehaviorAndroid } from 'react-native-fbsdk';
import TemplateInit from '../../components/global/templateInit';
import * as Actions from '../../redux/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import API from '../../API';

class Register extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
        errors: {},
        data: {
            usuario:'',
            password: '',
            nombre: '',
            repeatPassword: '',
            typeRegister: "Default",
            active: true
        }
    };
  }

  onChange = (data: any) => {
    console.log(data);
    this.setState((state: any) => ({
      ...state,
      data: {
        ...state.data,
        ...data,
      },
    }));
  };

  //register with facebook
  registerWithFacebook = () => {
    LoginManager.logInWithPermissions(['public_profile']).then(
      (result: any) => {
        if (result.isCancelled) console.log('Login cancelled');
        else
          AccessToken.getCurrentAccessToken().then((data: any) => {
            const token = data.accessToken.toString();
            this.initUser(token);
          });
      },
      error => {
        console.log('Login fail with error: ' + error);
      },
    );
  };
  initUser = async (token: string) => {
    const result: any = await API.facebookAPI(token);
    const temp = result.data;
    console.log(temp);
    const data = {
      usuario: temp.id,
      nombre: temp.name,
      password: '',
      typeRegister: "Facebook",
      active: true
    };

    this.APIRegister(data);
  };

  //button-login
  onRegister = () => {
    if (this.validations()) return;
    this.APIRegister(this.state.data);
  };

  //Action-Login
  APIRegister = (data: any) => {
    console.log('API  REGISTER');
    new Promise((resolve: Function, reject: Function) => {
      this.props.AREGISTER(data, resolve, reject);
    })
      .then(res => {
          const data:any = res;
          console.log(data);
        Alert.alert('Exitoso', data.message);
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Error', 'Ocurrió un error al registrar, intentelo de nuevo');
      });
  };

  //validation-form
  validations = () => {
    const {errors, data} = this.state;

    if (data.usuario === '') errors.usuario = 'Ingrese un usuario';
    else delete errors.usuario;

    if (data.nombre === '') errors.nombre = 'Ingrese un Nombre';
    else delete errors.nombre;

    if (data.password === '') errors.password = 'Ingrese una contraseña';
    else delete errors.password;

    if (data.repeatPassword !== data.password) errors.repeatPassword = 'La contraseña no coincide';
    else delete errors.repeatPassword;

    this.setState({errors});
    console.log(errors);
    if (Object.keys(errors).length === 0) return false;
    else return true;
  };

  render() {
    const { navigation: {navigate, goBack} } = this.props;
    const { errors } = this.state;

    return (
      <TemplateInit>
        <View style={styles.contenedor}>
          <View style={[styles.inputView, styles.firstInput]}>
            <TextInput
              style={styles.input}
              onChangeText={text => this.onChange({usuario: text})}
              placeholder="Usuario"
              keyboardType="email-address"
              placeholderTextColor="white"
            />
            { errors.usuario && <Text style={styles.textogenerico}>{errors.usuario}</Text> }
          </View>
          <View style={[styles.inputView, styles.firstInput]}>
            <TextInput
              style={styles.input}
              onChangeText={text => this.onChange({nombre: text})}
              placeholder="Nombre Completo"
              placeholderTextColor="white"
            />
            { errors.nombre && <Text style={styles.textogenerico}>{errors.nombre}</Text> }
          </View>
          <View style={[styles.inputView, styles.firstInput]}>
            <TextInput
              style={styles.input}
              onChangeText={text => this.onChange({password: text})}
              placeholder="Contraseña"
              secureTextEntry={true}
              placeholderTextColor="white"
            />
            { errors.password && <Text style={styles.textogenerico}>{errors.password}</Text> }
          </View>
          <View style={[styles.inputView, styles.latestInput]}>
            <TextInput
              style={styles.input}
              onChangeText={text => this.onChange({repeatPassword: text})}
              placeholder="Repita Contraseña"
              secureTextEntry={true}
              placeholderTextColor="white"
            />
            { errors.repeatPassword && <Text style={styles.textogenerico}>{errors.repeatPassword}</Text> }
          </View>
          <View style={styles.button}>
            <Button
              color={'#CC2014'}
              onPress={this.onRegister}
              title="REGISTRAR"
            />
          </View>
          <View style={styles.separator}>
            <View style={styles.lineaSeparador} />
            <Text style={styles.colorSeparator}>ó</Text>
            <View style={styles.lineaSeparador} />
          </View>
          <View style={styles.button}>
            <Button
              color={'#000000'}
              onPress={this.registerWithFacebook}
              title="REGISTRAR CON FACEBOOK"
            />
          </View>
          <View style={styles.textoFinal}>
            <Text style={[styles.textogenerico]}>
              ¿Ya tienes cuenta? Logueate{' '}
              <Text
                onPress={() => goBack()}
                style={[styles.textogenerico, styles.textoDelineado]}>
                aquí
              </Text>
            </Text>
          </View>
        </View>
      </TemplateInit>
    );
  }
}

const styles = StyleSheet.create({
  contenedor: {
    width: 267,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    flex: 1,
  },
  input: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: '100%',
  },
  inputView: {
    backgroundColor: 'transparent',
    width: '100%',
  },
  firstInput: {
    marginBottom: 20,
  },
  latestInput: {
    marginBottom: 40,
  },
  button: {
    width: '90%',
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 20,
  },
  separator: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lineaSeparador: {
    borderWidth: 0.5,
    borderColor: '#707070',
    height: 1,
    width: '40%',
  },
  colorSeparator: {
    color: 'white',
  },
  textoFinal: {
    marginTop: 30,
  },
  textoDelineado: {
    textDecorationLine: 'underline',
  },
  textogenerico: {
    color: 'white',
  },
});

function mapDispatchToProps(dispatch:any) {
    const { AREGISTER } = Actions;
    return bindActionCreators({
        AREGISTER
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Register);
