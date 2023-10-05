import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react"
import { Button, View, Text, TextInput, StyleSheet, Pressable, Image, ScrollView, FlatList, SectionList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MeuModal from "./Modal";
import MySectionList from "./Questao01";

const NativeStack = createNativeStackNavigator()

const Ap01App = () => {
    //como tem modal precisa criar grupos, se n era so botar os stacks no navcontainer
    return (
        <NavigationContainer>
            <NativeStack.Navigator initialRouteName="MySectionList">

            <NativeStack.Group>
            <NativeStack.Screen name="MySectionList" component={MySectionList}/>
            <NativeStack.Screen name="MeuModal" component={MeuModal}/>


            </NativeStack.Group>
            </NativeStack.Navigator>
        </NavigationContainer>
    )
}

export default Ap01App