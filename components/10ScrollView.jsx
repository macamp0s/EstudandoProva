import { Button, View, Text, TextInput, StyleSheet, Pressable, Image, ScrollView } from "react-native";
import { useState } from "react";

const imagem ={
    uri:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    width:200,
    height:200
}

const MyScrollView = ()=>{
    return(
        <ScrollView
        >
            <View style = {{
            flex:1,
            justifyContent:'flex-start',
            alignItems:'center',
            paddingTop:50 
        }}
        >
            <Text>BULBASAUR</Text>
            <Image
            source={imagem}>
            </Image>

            <Image
            source={imagem}>
            </Image>

            <Image
            source={imagem}>
            </Image>

            <Image
            source={imagem}>
            </Image>

            <Image
            source={imagem}>
            </Image>

            <Image
            source={imagem}>
            </Image>
            </View>
        </ScrollView>
    )
}

export default MyScrollView