import { Alert, TouchableHighlight, Button, View, Text, TextInput, StyleSheet, Pressable, Image, ScrollView, FlatList, SectionList } from "react-native";
import { useState } from "react";

const MyFlexbox = ()=>{

    const onPressButton=()=> {
        Alert.alert('You tapped the button!');
      }
    
      const onLongPressButton=()=> {
        Alert.alert('You long-pressed the button!');
      }

    return(
        <View style={estilos.container}>

            <View style={estilos.view1}>
            </View>

            <View style={estilos.view2}>  
            </View>

            <View style={estilos.view3}>  
            </View>


            <TouchableHighlight
          onPress={onPressButton}
          onLongPress={onLongPressButton}
          underlayColor="red"
          delayLongPress={3000}>
          <View style={estilos.button}>
            <Text style={estilos.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
           
        </View>
    )
}

const estilos = StyleSheet.create({
    container:{
        backgroundColor:'lightgray',
        marginTop:35,
        marginBottom:35,

        flex: 1,
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:'flex-start',
        flexWrap:'wrap'

    },

    view1:{
        backgroundColor:'powderblue', 
        width: 100,
        height:100

    },

    view2:{
        backgroundColor:'skyblue', 
        width: 100,
        height:100
    },

    view3:{
        backgroundColor:'steelblue',
        width: 100,
        height:100,
        alignSelf:'flex-end'
    },

    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3',
        borderRadius:50
        
      },
      buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white',
      },

})

export default MyFlexbox