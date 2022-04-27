import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Varibles from './../../constants/global';
import React from 'react';
import { Image, Text, View } from 'react-native';
import StackHome from './Home/StackHome';
import StackSearch from './Search/StackSearch';
import StackMessage from './Message/StackMessage';
import Notificacion from './Notification';
import Perfil from './Profile';

const Tab= createBottomTabNavigator();

const tabBarIcon = (icono: any, titulo:string) => {
    return ({
        tabBarLabel: () => null, 
        tabBarIcon: ({color, focused, size}:any) => 
            <Image 
                source={icono} 
                style={{ 
                    width: focused ? 22.5 : 20, 
                    height: focused ? 22.5 : 20 
                }}
            />,
        title: titulo
    })
}

const StackPrincipalNavigation = () => {
  const screenOptions = {
    //headerShown: false,
    tabBarStyle: { backgroundColor: '#050505' },
    headerStyle: { backgroundColor: '#161616' },
    headerTintColor: 'white'
  }
  const initialRouteName = 'StackHome';

  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{...screenOptions, headerTitleAlign:'center'}} initialRouteName={initialRouteName} >
            <Tab.Screen name="StackHome" options={tabBarIcon(Varibles.iconHome, 'Eventos destacados')}>
                {(props:any) => <StackHome {...props}/>}
            </Tab.Screen>
            <Tab.Screen name="Search" options={tabBarIcon(Varibles.iconSearch, '¡Postula y Amplia tu red!')}>
                {(props:any) => <StackSearch {...props}/>} 
            </Tab.Screen>
            <Tab.Screen name="Message" options={tabBarIcon(Varibles.iconMessage, 'Mensajes')}>
                {(props:any) => <StackMessage {...props}/>}
            </Tab.Screen>
            <Tab.Screen name="Notificacion" component={Notificacion} options={tabBarIcon(Varibles.iconNotification, 'Notificaciones')} />
            <Tab.Screen name="Perfil" component={Perfil} options={tabBarIcon(Varibles.iconPerfil, 'Mi Perfil')} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

export default StackPrincipalNavigation;