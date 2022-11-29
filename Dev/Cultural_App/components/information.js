import React, {useState, useContext} from 'react';

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

  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={{width: '100%', height: 300}}
          source={{
            uri:
              'http://192.168.0.10/image/' +
              detailInformation.detailImage +
              detailInformation.imageFormat,
          }}
        />
        <Text>{detailInformation.detailIntro}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default culture;
