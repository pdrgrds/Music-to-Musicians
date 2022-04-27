import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from './Home';
import Detail from './Detail';

const Stack = createStackNavigator();

const StackHomeNavigation = (props:any) => {
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerShown: false
        })
    }, []);

    const screenOptions = {
      tabBarStyle: { backgroundColor: '#050505' },
      headerStyle: { backgroundColor: '#161616' },
      headerTintColor: 'white'
    }
  return (
    <Stack.Navigator screenOptions={{...screenOptions, headerTitleAlign:'center'}} initialRouteName='Home' >
        <Stack.Screen name="Home" component={Home} options={{title:'Eventos destacados'}} />
        <Stack.Screen name="Detail" component={Detail} options={{title:'Detalle del evento'}} />
    </Stack.Navigator>
  );
}

export default StackHomeNavigation;