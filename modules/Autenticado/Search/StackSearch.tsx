import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Variables from './../../../constants/search';
import { Text, View, ScrollView, Image, TextInput, StyleSheet, Dimensions } from 'react-native';
import SearchMap from './searchMap';
import SearchLista from './searchList';
import SearchFilter from './searchFilter'

const Tab = createMaterialTopTabNavigator();

const tabBarIcon = (icono: any) => {
    return ({
        tabBarLabel: () => null, 
        tabBarIcon: ({color, focused, size}:any) => 
            <Image 
                source={icono}
                //style={{backgroundColor: '#61646b'}}
            />
    })
}

const StackSearch = () => {

    return (
        <View style={styles.contenedorStack}>
            <View style={styles.Search}>
                <View style={styles.contenedorSearch}>
                    <TextInput style={styles.inputSearch} placeholder='Buscar...'/>
                </View>
            </View>
            <View style={styles.navigator}>
                <Tab.Navigator 
                    screenOptions={
                        { 
                            //tabBarContentContainerStyle:{alignItems:'center', justifyContent:'center'}, 
                            tabBarStyle: {backgroundColor: '#21252e' }, 
                            //tabBarItemStyle: { width: 100 },
                            //tabBarIndicatorContainerStyle: { backgroundColor: 'red' },
                            //tabBarActiveTintColor: 'yellow',
                            tabBarPressColor: '#61646b'
                        }
                    } 
                >
                    <Tab.Screen name="Map" component={SearchMap} options={tabBarIcon(Variables.iconSearchMap)}/>
                    <Tab.Screen name="List" component={SearchLista} options={tabBarIcon(Variables.iconSearchList)}/>
                    <Tab.Screen name="Filter" component={SearchFilter} options={tabBarIcon(Variables.iconSearchFilter)}/>
                </Tab.Navigator>
            </View>
        </View>
    );    
}

const styles = StyleSheet.create({
    contenedorStack: {
        flex: 1
    },
    navigator: {
        flex: 1
    },
    Search: {
        backgroundColor: '#161616',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contenedorSearch: {
        width: '80%',
        backgroundColor: 'transparent',
        paddingVertical: 20
    },
    inputSearch: {
        width: '100%',
        backgroundColor: 'white',
        height: 40,
        borderWidth: 1,
        borderColor: '#707070',
        borderRadius: 5,
        paddingHorizontal: 20
    }
})

export default StackSearch;