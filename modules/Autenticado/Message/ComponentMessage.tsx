import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const ComponentMessage = (props:any) => {

    return(
        <View 
          style={{
            alignItems: props.position
          }}
        >
            <Text 
                style={{            
                    ...styles.contenedor, 
                    ...stylesText.color,
                    backgroundColor: props.color, 
                }} 
            >
                {props.message}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        //flex: 1,

        maxWidth: '60%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20
    }
})

const stylesText = StyleSheet.create({
    color: {
        color: 'white'
    }
})