import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

class SearchMap extends React.Component<any,any> {
    constructor(props:any){
        super(props);
    }

    render(){

        return(
            <View>
                <MapView
                  style={styles.map}
                  initialRegion={{
                    latitude: 37.78825,
                    latitudeDelta: 0.0922,
                    longitude: -122.4324,
                    longitudeDelta: 0.0421,
                  }}
                  zoomEnabled
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    }
})

export default SearchMap;