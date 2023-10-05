import { useEffect, useState } from "react"
import { Button, View, Text, TextInput, StyleSheet, Pressable, Image, ScrollView, FlatList, SectionList } from "react-native";
import PokedexScreen from "./PokedexScreen";

const PokemonModalScreen=({navigation, route})=>{
    const {url}=route.params

    const [dados, setDados] = useState({})

    useEffect(
        () => {
            fetchPokemon()
        }
        ,
        []
    )


    const fetchPokemon = () => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const pokemon = {
                    id: data.id,
                    name: data.name,
                    height: data.height,
                    order: data.order,
                    weight: data.weight,
                    back_default:data.sprites.back_default
                }
                setDados(pokemon)
            })
            .catch(error => console.log(error))
    }

    return(
        <View>
        <Text>Tela Modal</Text>
        <Text>{dados.name}</Text>
        <Image
                        source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${dados.id}.png` }}
                        style={{ width: 100, height: 100 }}
                                        />
        <Button 
        title="fechar modal"
        onPress={()=>navigation.goBack()}>
        </Button>

        
    </View>
    )

}

export default PokemonModalScreen