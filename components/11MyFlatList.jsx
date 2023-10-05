import { Button, View, Text, TextInput, StyleSheet, Pressable, Image, ScrollView, FlatList } from "react-native";
import { useState } from "react";

//dados que eu consumiria de uma api rest
const dados=[
    {key:1,nome:"Jefferson", nota:6.7},
    {key:2,nome:"Maurício", nota:8.1},
    {key:3,nome:"Paulo", nota:7.0},
    {key:4,nome:"João", nota:5.7},
    {key:5,nome:"Diana", nota:9.4},
    {key:6,nome:"David", nota:3.4},
    {key:7,nome:"Jefferson", nota:6.7},
    {key:8,nome:"Maurício", nota:8.1},
    {key:9,nome:"Paulo", nota:7.0},
    {key:10,nome:"João", nota:5.7},
    {key:11,nome:"Diana", nota:9.4},
    {key:12,nome:"David", nota:3.4},
    {key:13,nome:"Jefferson", nota:6.7},
    {key:14,nome:"Maurício", nota:8.1},
    {key:15,nome:"Paulo", nota:7.0},
    {key:16,nome:"João", nota:5.7},
    {key:17,nome:"Diana", nota:9.4},
    {key:18,nome:"David", nota:3.4},
    
]

const MyFlatList=()=>{
    return(
        <View
        style={{
            flex:1,
            justifyContent:'flex-start',
            alignItems:'center',
            marginTop:40
        }}>

            <FlatList
            data={dados}
            renderItem={
                ({item})=>{
                    return(
                        <View>
                            <Text style={{
                                fontSize:40,
                                fontWeight:'bold'
                            }}>
                                {item.nome} - {item.nota}
                            </Text>
                        </View>
                    )
                }
            }
            //boa pratica de programaçao - se puxar dados de um servidor que no tem a prop key, 
            //keyextractor vai colocar uma chave em cada elemento do vetor

            keyExtractor={(elemento)=>{
                return elemento.key + elemento
            }}>

            </FlatList>

        </View>
    )
}

export default MyFlatList