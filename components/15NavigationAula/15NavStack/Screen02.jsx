import { useEffect, useState } from "react"
import { Button, View, Text, TextInput, StyleSheet, Pressable, Image, ScrollView, FlatList, SectionList } from "react-native";
import MyStyle from "./MyStyle";

//o objeto route serve para receber coisas de outras telas

const Screen02=({navigation, route})=>{
    const{name,grade} = route.params
    return(
        <View style={MyStyle.container}>
            <Text style={MyStyle.header}>
                Screen02
            </Text>

            <Text style={MyStyle.header}>
                {name}
            </Text>

            <Text style={MyStyle.header}>
                {grade}
            </Text>

            <Button title="Ir para 03"
              onPress={()=>navigation.navigate("Screen03")}></Button>
        </View>
    )
}

export default Screen02