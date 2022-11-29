

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
import { createStackNavigator } from '@react-navigation/stack';
import mainHome from './components/mainHome';
import culturakdate from './components/culturaldate';
import map from './components/map';


const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='mainHome' component={mainHome}/>
        <Stack.Screen name='culturakdate' component={culturakdate}/>
        <Stack.Screen name='map' component={map}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  

};


export default App;
