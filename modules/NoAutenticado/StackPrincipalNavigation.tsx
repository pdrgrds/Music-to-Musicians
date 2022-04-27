import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from './login';
import Register from './register';

const Stack = createStackNavigator();

const StackPrincipalNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login' >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackPrincipalNavigation;