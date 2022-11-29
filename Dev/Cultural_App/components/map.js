import React, { Component } from "react";
// global.currentScreenIndex = 'Dashboard';
//Import all required component
import {View,StyleSheet} from "react-native";
import MapView, { Marker } from "react-native-maps";

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
          showsUserLocation={true} >
         <Marker coordinate={{ latitude: 36.861788908031855, longitude: 127.48033416327694 }} />
         <Marker coordinate={{ latitude: 36.826156484755614, longitude: 127.49318372154447 }} />
         <Marker coordinate={{ latitude: 36.85320365766268, longitude: 127.42283133188303 }} />
       </MapView>
      </View>
    );
  }
}
export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    width: "100%",
    height: "100%"
  }
});