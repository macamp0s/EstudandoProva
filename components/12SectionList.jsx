import { Button, View, Text, TextInput, StyleSheet, Pressable, Image, ScrollView, FlatList, SectionList } from "react-native";
import { useState } from "react";

const dados = [
    {
        title: "J", data: [
            { nome: 'Jefferson', id:1 },
            { nome: "Julio", id:2 }
        ]
    },

    {
        title: "S", data: [
            { nome: 'Sonia', id:3 },
            { nome: "Saulo", id:4 }
        ]
    },

    {
        title: "M", data: [
            { nome: 'Mauricio', id:5 },
            { nome: "Maria", id:6 }
        ]
    },
]

const MySectionList = () => {
    return (
        <View style={estilo.container}>

        <SectionList
        sections={dados}
        keyExtractor={(item)=>"SASDSADADAWI"+item.id}
        renderItem={({item})=>{
            return(
                <Text>{item.nome}</Text>
            )
        }}
        renderSectionHeader={
            ({section})=>{
                return(
                    <Text>{section.title}</Text>
                )
            }
        }
        >
       
        </SectionList>




        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 50
    }
})

export default MySectionList