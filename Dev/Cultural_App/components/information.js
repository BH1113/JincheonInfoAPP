import React, {useState, useContext} from 'react';
import {SliderBox} from 'react-native-image-slider-box';

import {SafeAreaView, ScrollView, Image, Text} from 'react-native';
import mainHome from './mainHome';

const culture = ({route}) => {
  const detailInformation = route.params.information;
  const imageAmount = detailInformation.imageAmount;
  const imagePath =
    'http://192.168.86.159/image/' + detailInformation.detailImage;
  const imageFormat = detailInformation.imageFormat;
  const imageArr = [];

  if (imageAmount != 0) {
    for (let i = 0; i < imageAmount; i++) {
      imageArr.push(imagePath + i + imageFormat);
    }
  } else {
    imageArr.push(imagePath + imageFormat);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <SliderBox images={imageArr} autoplay cicrleLoop />
        <Text>{detailInformation.detailIntro}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default culture;
