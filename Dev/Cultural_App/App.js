

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


const Drawer = createDrawerNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='MainHome'>
        <Drawer.Screen name='MainHome' component={mainHome}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
  

};


export default App;
