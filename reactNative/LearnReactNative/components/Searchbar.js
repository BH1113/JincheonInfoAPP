import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";


function Searchbar() {

    const [text, setText] = useState('');
    
   
    return(
        <>
            <View>

            </View>
            <View style = {styles.block}>
                <TextInput placeholder="검색할 항목을 입력하세요" 
                style = {styles.input}
                value = {text}
                onChangeText ={setText}
                ></TextInput>
            
                
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    block:{
        height: 50,
        paddingHorizontal: 16,
        borderColor: 'white',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        justifyContent: 'center',
    },
    input: {
        fontSize: 14,
        paddingVertical: 8,
    },
    buttonStyle: {
        alignItems: 'center',
        justifyContent:'center',
        width: 10,
        height: 10,
        backgroundColor: '#26a69a',
    },

   
});

export default Searchbar;
