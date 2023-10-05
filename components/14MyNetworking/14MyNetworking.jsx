import { useEffect, useState } from "react"
import { Button, View, Text, TextInput, StyleSheet, Pressable, Image, ScrollView, FlatList, SectionList } from "react-native";
import estilos from "./14Estilos";
//nao vamos usar, axios, vamos usar fetch
//fetch é uma funçao assincrona entao retorna uma promessa


const MyNetworking=()=>{

    const [title,setTitle] = useState("")
    const [description,setDesc] = useState("")
    const [movie,setMovies] = useState([])

    //um hook que é chamado toda vez q uma determinada ação acontece em uma varivael de estado
    useEffect(
        ()=>{
            getMovies()
        },
        []
    )

    const getMovies= ()=>{
        //retorna uma promessa, é um get
        //pode dar certo ou errado promessa then da certo catch a errado
        //response é so a response, response.json é a promise

        fetch("https://reactnative.dev/movies.json")
        .then((response) =>{return response.json()})
        //.then(dados=>(console.log(dados.title)))

        .then(({title, description, movies})=>{
        
            setTitle(title)
            setDesc(description)
            setMovies(movies)

        })

        .catch(error=>console.log(error))
    }

    return(
        <View style={estilos.container}>
            <Text style={estilos.header}>{title}</Text>
            <Text style={estilos.menor}>{description}</Text>


            <FlatList
            data={movie}
            renderItem={
                ({item, index})=>{
                    //if(index===1 || index===2){
                    return(
                        <View>
                        <Text>{item.id}</Text>
                        <Text>{item.title}</Text>
                        <Text>{item.releaseYear}</Text>
                        </View>
                    )
                }
            }
        //}

            >
                
            </FlatList>

        </View>
        
    )
}

export default MyNetworking