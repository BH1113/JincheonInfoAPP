/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet, TextInput} from 'react-native';
import Searchbar from './components/Searchbar';
import SearchBar from 'react-native-platform-searchbar';


const App = () => {
 const [count, setCount] = useState(0);
 const [value, setValue] = useState('');

 const onIncrease = () => setCount(count +1);
 const onDecrease = () => setCount(count -1);

  return (
    <SafeAreaView style = {styles.full}>
      <View style = {styles.viewcolor}>

      </View>
      <SearchBar placeholder='검색창' value={value} onChangeText={setValue}
       style={styles.SearchBar}></SearchBar>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewcolor: {
    height: 64,
    backgroundColor: 'black',
  },
});

export default App;
