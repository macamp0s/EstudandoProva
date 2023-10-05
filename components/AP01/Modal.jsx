import { useEffect, useState } from "react"
import { Button, View, Text, TextInput, StyleSheet, Pressable, Image, ScrollView, FlatList, SectionList } from "react-native";
import dados from "./MeusDados";
import MyStyle from "./EstiloAP";
import MyIconButton from "./MyIconButton";


const MeuModal=()=>{
    const route = useRoute();
    const { nome, valor } = route.params;
  
    return (
      <View>
        <Text>Nome: {nome}</Text>
        <Text>Valor: {valor}</Text>
        
      </View>)
}

export default MeuModal