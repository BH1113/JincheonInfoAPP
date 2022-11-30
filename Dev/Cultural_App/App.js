import React, {useState} from 'react';

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
  ImageBackground,
} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import mainHome from './components/mainHome';
import culture from './components/information';
import map from './components/map';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="mainHome" component={mainHome} 
        options={{
          title:'',
           headerBackground: () => <ImageBackground style={{width:411, height:80}} source={require('./image/appheader.png')}/>
           }}
        />
        <Stack.Screen name="culture" component={culture} 
         options={{
          title:'',
           headerBackground: () => <ImageBackground style={{width:411, height:80}} source={require('./image/appheader.png')}/>
           }}
        />
        <Stack.Screen name="map" component={map}
         options={{
          title:'',
           headerBackground: () => <ImageBackground style={{width:411, height:80}} source={require('./image/appheader.png')}/>
           }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerimage:{
    width:'100%',
    height: '100%',
  }
})
export default App;
