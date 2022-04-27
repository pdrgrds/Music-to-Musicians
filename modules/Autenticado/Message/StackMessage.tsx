import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import MessageList from './MessageList';
import MessageItem from './MessageItem';

const Stack = createStackNavigator();

const StackMessageNavigation = (props:any) => {
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
    <Stack.Navigator screenOptions={{...screenOptions, headerTitleAlign:'center'}} initialRouteName='ListMessage' >
      <Stack.Screen name="ListMessage" component={MessageList} options={{title:'Mensajes'}} />
      <Stack.Screen name="ItemMessage" component={MessageItem} options={{title:'Mensajes'}} />
    </Stack.Navigator>
  );
}

export default StackMessageNavigation;