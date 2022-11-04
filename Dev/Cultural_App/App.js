

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


const App = () => {
  
  const [searching,setsearchdata] = useState("");

  const data= [
    {key:'1', value:'이상설 생가'},
    {key:'2', value:'김유신 생가'},
    {key:'3', value:'농다리'},
  ];
  return(
    <SafeAreaView style={styles.SafeAreaViewStyles}>
      <View style = {styles.viewstyle}>
      <SelectList data={data} 
      setSelected={setsearchdata}
      onSelect={()=> alert(searching)}/>
     
      </View >
      <View style={styles.middleviewstyle}>
      <Text style={styles.textsetting}>우리동네 문화제</Text>
        <ScrollView>
          <TouchableOpacity>
            <Image source={require('./image/brige.jpg')} style={styles.imagestyle}/>

          </TouchableOpacity>
        </ScrollView>

      </View>
    </SafeAreaView>
  )
};
const styles = StyleSheet.create({
  viewstyle:{
    paddingHorizontal: 20,
    paddingVertical: 50,
    height: 30,
    flex: 0.3,
    backgroundColor:'blue',
  },
  middleviewstyle:{
    backgroundColor: 'red',
    flex:1,
  },
  SafeAreaViewStyles:{
    flex:1,
  },
  imagestyle:{
    height:60,
    marginHorizontal:20,
    marginTop:10,
    width:'90%',
  },
  textsetting:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:20,
  },
});


export default App;
