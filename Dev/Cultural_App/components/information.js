import React, {useState, useContext} from 'react';
import {ImageSlider} from 'react-native-image-slider-banner';
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

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageSlider
          data={images}
          autoPlay={false}
          onItemChanged={item => console.log('item', item)}
          closeIconColor="#fff"
        />
        <Text>{detailInformation.detailIntro}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default culture;
