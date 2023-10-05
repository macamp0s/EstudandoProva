import { Button, View, Text, TextInput, StyleSheet, Pressable, Image, ScrollView, FlatList, SectionList } from "react-native";
import { useState } from "react";

const MyFlexbox = ()=>{
    return(
        <View style={estilos.container}>

            <View style={estilos.view1}>

            </View>


            <View style={estilos.view2}>
                
            </View>


            <View style={estilos.view3}>
                
            </View>
           
        </View>
    )
}

const estilos = StyleSheet.create({
    container:{
        backgroundColor:'red',
        marginTop:35,
        flex: 1,

    },

    view1:{
        backgroundColor:'green', flex: 1,


    },

    view2:{
        backgroundColor:'yellow', flex: 1,
    },

    view3:{
        backgroundColor:'white', flex: 1,
    },

})

export default MyFlexbox