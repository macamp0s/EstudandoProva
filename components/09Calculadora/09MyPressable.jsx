import { Button, View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { useState } from "react";

const MyPressable =({funcao, titulo})=>{
    return(
        <View>
        <Pressable
        onPress={funcao}
        style={
            ({pressed})=>[
                {
                    backgroundColor: pressed ? 'red' :'steelblue',
                    padding:5,
                    
                }
            ]
        }>
            <Text style={{color:'white'}}>{titulo}</Text>
        </Pressable>
    </View>
    )
}
export default MyPressable