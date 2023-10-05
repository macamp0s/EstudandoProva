import { Button, View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import estilos from "./09CSS";
import MyPressable from "./09MyPressable";


const Calculadora = () => {

    const [number1, setNumber1] = useState("")
    const [number2, setNumber2] = useState("")
    const [result, setResult] =useState("")

    function somar(){
        setResult(parseInt(number1)+parseInt(number2))
    }
    
    function subtrair(){
        setResult(parseInt(number1)-parseInt(number2))
    }

    function multiplicar(){
        setResult(parseInt(number1)*parseInt(number2))
    }

    function dividir(){
        setResult((parseInt(number1)/parseInt(number2)).toFixed(8))
    }


    return (
        <View style={estilos.container}>
            <Text style={estilos.header}>
                CALCULADORA 0.1
            </Text>
            <TextInput style={estilos.input}
            onChangeText={(numero)=>setNumber1(numero)}
            keyboardType="numeric">
            </TextInput>

            <TextInput style={estilos.input}
            onChangeText={(numero)=>setNumber2(numero)}
            keyboardType="numeric">
            </TextInput>
            
            <View style={estilos.containerBotoes}>
                <Button title="SOMAR" onPress={somar}></Button>
                <Button title="SUBTR" onPress={subtrair}></Button>
                <Button title="MULTI" onPress={multiplicar}></Button>
                <Button title="DIVIDI" onPress={dividir}></Button>
            </View>

           <MyPressable funcao={somar} titulo="SOMAR"></MyPressable>


            <Text style={[estilos.header,{marginTop:20}]}>
                Resultado: {result}
            </Text>
        </View>

    )
}

export default Calculadora

