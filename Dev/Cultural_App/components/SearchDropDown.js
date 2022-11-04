import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

function SearchDorpDown(props){
    const {dateSource} = props;
    
    
    return(
        <View style = {styles.SearDownText}>
            <Text >
                검색
            </Text>
            <View style={styles.SearchDropbar}>
            {

              dateSource.map(item => {
                return(
                <TouchableOpacity style = {styles.CustemButton}>
                <Text style={styles.SearchDropbarTextColor}>{item}</Text>
                </TouchableOpacity>
                )
              })
            }
           
            </View>
          
        </View>

    )
}

const styles = StyleSheet.create({
    SearDownText:{
        position: 'absolute',
        top:'14%',
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.2,
        backgroundColor: 'gray',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,


    },
    SearchDropbar:{
        flexWrap: 'wrap',
        marginHorizontal: 20,
        backgroundColor: '#404040',
    },
    SearchDropbarTextColor:{
        color:'bleck',
        width: 25,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    CustemButton: {
        backgroundColor: 'white',
        width: 30,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SearchDorpDown;