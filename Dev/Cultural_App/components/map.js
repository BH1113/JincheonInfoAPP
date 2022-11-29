import React, { Component } from "react";
// global.currentScreenIndex = 'Dashboard';
//Import all required component
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  TouchableHighlight,
  StatusBar,
  FlatList,
  ActivityIndicator,
  Button,
  NetInfo,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
   

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    Geolocation.getCurrentPosition((info) => {
      let lat = info.coords.latitude;
      let long = info.coords.longitude;

      console.log(lat);
      console.log(long);
      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
      this.setState({ initialPosition: initialRegion });
    });
  }

  render() {
    const { modalVisible } = this.state;
    const { navigate } = this.props.navigation;
    // const token_data = token_value();
    // console.log("token_homes_2st"+token_data);

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={this.state.initialPosition}
          showsUserLocation={true}
        />
      </View>
    );
  }
}
export default Dashboard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    fontWeight: "400",
    color: "#000",
    fontFamily:
      "Inter UI,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  },

  map: {
    height: 610,
    width: 410,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});