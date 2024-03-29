import React, {useState, useContext, Fragment} from 'react';
import {ImageSlider} from 'react-native-image-slider-banner';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {Decimal} from 'decimal.js';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Item,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  Button,
} from 'react-native';
import mainHome from './mainHome';

const culture = ({route}) => {
  const detailInformation = route.params.information;
  const url = 'http://192.168.86.159/image/';
  const imageName = detailInformation.detailImage;
  const format = detailInformation.imageFormat;
  const numofImage = detailInformation.imageAmount;
  const images = [];

  images.push({img: url + imageName + format});
  if (numofImage > 0) {
    for (let i = 1; i < numofImage + 1; i++) {
      images.push({img: url + imageName + i + format});
    }
  }

  const renderMap = () => {
    if (detailInformation.cor_y != 0 && detailInformation.cor_y != 0) {
      return (
        <Fragment>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#6dd5ed'}}>
            <MapView
              style={{width: '50%', height: 200}}
              provider={PROVIDER_GOOGLE}
              initialRegion={{
                latitude: detailInformation.cor_x,
                longitude: detailInformation.cor_y,
                latitudeDelta: 0.006,
                longitudeDelta: 0.004,
              }}>
              <Marker
                coordinate={{
                  latitude: detailInformation.cor_x,
                  longitude: detailInformation.cor_y,
                }}
              />
            </MapView>
          </View>
        </Fragment>
      );
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageSlider
          data={images}
          autoPlay={false}
          onItemChanged={item => console.log('item', item)}
          closeIconColor="#fff"
        />
        <Text style={styles.informationtext}>{detailInformation.detailIntro}</Text>
        <Text style={styles.textalline}>문화제 위치</Text>
        {renderMap()}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  textalline:{
    textAlign:'center',
    fontSize: 25,
    color:'white',
    backgroundColor:'black',
  },
  informationtext:{
    fontSize: 13,
    fontWeight:'bold',
   marginTop: 20,
   marginBottom: 20,
  },
})
export default culture;
