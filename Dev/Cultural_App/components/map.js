import React, { Component } from "react";
import {View,StyleSheet} from "react-native";
import MapView, { Marker } from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      initialPosition: {
        latitude: 36.85477746864833,
        longitude: 127.43554725015466,
        latitudeDelta: 0.25,
        longitudeDelta: 0.15
      },
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={this.state.initialPosition}
          showsUserLocation={true}>
         <Marker coordinate={{ latitude: 36.861788908031855, longitude: 127.48033416327694 }} /> 
         <Marker coordinate={{ latitude: 36.826156484755614, longitude: 127.49318372154447 }} /> 
         <Marker coordinate={{ latitude: 36.85320365766268, longitude: 127.42283133188303 }} /> 
         <Marker coordinate={{ latitude: 36.8887086, longitude: 127.4130883 }} /> 
         <Marker coordinate={{ latitude: 36.798240, longitude: 127.410445 }} /> 
         <Marker coordinate={{ latitude: 36.854796, longitude: 127.451374 }} />
         <Marker coordinate={{ latitude: 36.835288, longitude: 127.551342 }} /> 
         <Marker coordinate={{ latitude: 36.839424, longitude: 127.341038 }} /> 
         </MapView>
      </View>
    );
  }
}

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1 , flexDirection: 'column-reverse'
  },
  map: {
    width: "100%",
    height: "96%"
  }
});