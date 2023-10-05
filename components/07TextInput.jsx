import { Button, View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

const MyTextInput = () => {
    //variavel de estado, desse modo atualiza componente na interface visualmente

    //const[frase,setFrase] =useState("valor padrao")

    const[frase,setFrase] =useState("")

    return (
        <View style={estilos.view}>
        <Text style={estilos.header}>Tradutor Emote</Text>
        <TextInput
        style={estilos.input}
        placeholder="digite algo"
        defaultValue={frase}
        //modificando variavel de estado passando como parametro a variaevl textodigitado
        onChangeText={
            (textoDigitado)=>setFrase(textoDigitado)
        }
        >

        </TextInput>
        <Text style={estilos.frase}>{
        frase.split(" ")
        //js testa se existe, da pra fazer com if
        .map((palavra)=> palavra && '😂').join (" :) ")
        }</Text>
        </View>
    )
}

const estilos = StyleSheet.create({

        header:{
            fontSize:30,
            fontWeight:"bold",
            color:"red",
            padding:30,
            marginTop:100
        },
        view: {
            padding: 20,
            backgroundColor: "#C0C0C0",
            flex:1,
            alignItems:'center',
        },
        input: {
            height: 40,
            borderColor: 'black',
            borderWidth: 2,
            fontSize: 20,
            paddingLeft: 10,
            fontWeight:"bold",
            width:300
        },
        frase:{
            fontSize:20,
            fontWeight:"bold",
        
            padding:10,
            
        }
    }
)


export default MyTextInput