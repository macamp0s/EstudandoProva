import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react"
import { Button, View, Text, TextInput, StyleSheet, Pressable, Image, ScrollView, FlatList, SectionList } from "react-native";
import PokedexScreen from "./PokedexScreen";
import PokemonModalScreen from "./PokemonModalScreen";
import { NavigationContainer } from "@react-navigation/native";

const NativeStack = createNativeStackNavigator()

const PokemonApp = () => {
    //como tem modal precisa criar grupos, se n era so botar os stacks no navcontainer
    return (
        <NavigationContainer>
            <NativeStack.Navigator>


           
            <NativeStack.Group>
            <NativeStack.Screen name="Pokedex" component={PokedexScreen}/>

            </NativeStack.Group>



            <NativeStack.Group screenOptions={{presentation:"modal"}}>
            <NativeStack.Screen name="PokemonModal" component={PokemonModalScreen}/>

            </NativeStack.Group>
            </NativeStack.Navigator>
        </NavigationContainer>
    )
}

export default PokemonApp