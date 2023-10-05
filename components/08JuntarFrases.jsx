import { Button, View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

const JuntarFrases = () => {
    //variavel de estado, desse modo atualiza componente na interface visualmente

    //const[frase,setFrase] =useState("valor padrao")

    const[frase1,setFrase] =useState("")
    const[frase2,setFrase2] =useState("")
    const[frase3, setFrase3] = useState("")

    return (
        <View style={estilos.view}>
        <Text style={estilos.header}>Juntador de frases</Text>
        <TextInput
        style={estilos.input}
        placeholder="digite algo 1"
        defaultValue={frase1}
        //modificando variavel de estado passando como parametro a variaevl textodigitado
        onChangeText={
            (textoDigitado)=>setFrase(textoDigitado)
        }
        >

        </TextInput>


        <TextInput
        style={estilos.input}
        placeholder="digite algo 2"
        defaultValue={frase2}
        //modificando variavel de estado passando como parametro a variaevl textodigitado
        onChangeText={
            (textoDigitado)=>setFrase2(textoDigitado)
        }
        >

        </TextInput>
        <View>
            <Button
            title="juntar"
            onPress={()=>{setFrase3(frase1+frase2)}}
            >
            </Button>
        </View>

        <Text style={estilos.frase}>
       {frase3}
        </Text>
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


export default JuntarFrases