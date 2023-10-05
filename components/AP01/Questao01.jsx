import { useEffect, useState } from "react"
import { Button, View, Text, TextInput, StyleSheet, Pressable, Image, ScrollView, FlatList, SectionList } from "react-native";
import dados from "./MeusDados";
import MyStyle from "./EstiloAP";
import MyIconButton from "./MyIconButton";
import MeuModal from "./Modal";
import { useNavigation } from "@react-navigation/native";


const MySectionList=({navigation})=>{
    

    return (
        
        <View style={MyStyle.container}>

        <SectionList
        sections={dados}
        keyExtractor={(item)=>"SASDSADADAWI"+item.id}
        renderItem={({item})=>{
            return(
                <View style={MyStyle.valores}>
                    <View>
                
                <Text style={MyStyle.texto}><MyIconButton icone={item.icon } nome={item.nome} 
                valor={item.valor} horario={item.horario}
                ></MyIconButton> {item.nome} {item.valor}</Text></View>  
                <Text style={MyStyle.textohorario}>{item.horario}</Text></View>
            )
        }}
        renderSectionHeader={
            ({section})=>{
                return(
                    <Text style={MyStyle.secao}>{section.title}</Text>
                )
            }
        }
        >
       
        </SectionList>




        </View>
    )
}

export default MySectionList