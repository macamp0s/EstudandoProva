import { useEffect, useState } from "react"
import { Button, View, Text, TextInput, StyleSheet, Pressable, Image, ScrollView, FlatList, SectionList } from "react-native";
import dados from "./MeusDados";
import MyStyle from "./EstiloAP";
import MyIconButton from "./MyIconButton";
import { useRoute } from "@react-navigation/native";


const MeuModal=()=>{
    const route = useRoute();
    const { nome, horario, valor } = route.params;
  
    return (
      <View>
        <Text>Nome: {nome}</Text>
        <Text>Horario: {valor}</Text>
        <Text>Horario: {horario}</Text>
        
      </View>)
}

export default MeuModal