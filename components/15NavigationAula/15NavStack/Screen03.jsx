import { useEffect, useState } from "react"
import { Button, View, Text, TextInput, StyleSheet, Pressable, Image, ScrollView, FlatList, SectionList } from "react-native";
import MyStyle from "./MyStyle";

const Screen03=({navigation})=>{
    return(
        <View style={MyStyle.container}>
            <Text style={MyStyle.header}>
                Screen03
            </Text>
            <Button title="Desempilhar tudo com o pop"
            onPress={()=>navigation.popToTop()}></Button>
        </View>
     )
    }

export default Screen03