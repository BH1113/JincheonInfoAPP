

import React,{useState}from 'react';

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
} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer} from '@react-navigation/native';
import mainHome from './components/mainHome';
import culturakdate from './components/culturaldate';
import map from './components/map';


const Drawer = createDrawerNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='mainHome'>
        <Drawer.Screen name='mainHome' component={mainHome}/>
        <Drawer.Screen name='cultorakdate' component={culturakdate}/>
        <Drawer.Screen name='map' component={map}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
  

};


export default App;
