import { useEffect, useState } from "react"
import { Button, View, Text, TextInput, StyleSheet, Pressable, Image, ScrollView, FlatList, SectionList } from "react-native";
import PokemonModalScreen from "./PokemonModalScreen";
import PokeButton from "./PokeButton";

//descontroi o props com chaves {}
const PokedexScreen = ({ navigation }) => {

    const [pokemons, setPokemons] = useState([])

    useEffect(
        () => {
            FetchPokemaos()
        },
        []
    )

    const FetchPokemaos = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
            .then(response => response.json())
            .then((json) => {
                //let id=1

                const VetorFormatado = json.results.map(

                    //cada elemento do vetor esta aqui dentro por causa do map
                    //aqui n ta desconstruido, podeseria ser so name, url e n pokemonObj
                    //(pokemonObj)=>{  
                    ({ name, url }) => {
                        //return {id:id++, name:pokemonObj.name, url:pokemonObj.url}

                        //o 6 é pra pegar a posiçao  6no vetor, ou seja o id
                        //code smell so pra pegar o id do pokeapi ja que eles n fornecem ai n precisar usar contador
                        return { id: url.split("/")[6], name, url }
                    }
                )

                //console.log(VetorFormatado)
                setPokemons(VetorFormatado)


            })
            .catch(error => console.log(error))
    }

    //pra poder renderizar os pokemon lado a lado metodo q retorna jsx
    const renderPokemons = () => {
        return (
            <ScrollView style={{
                backgroundColor: "red",
                width: '90%'
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',

                    justifyContent: 'space-evenly',
                    flexWrap: 'wrap'

                }}>
                    {
                        // o map ta retornando um jsx cada um dentro dessa view poke 1, poke2 jsx, map faz um laço no vetor
                        pokemons.map(
                            (pokemonObj) => {
                                return (
                                    <View style={{
                                        margin: 2,
                                        marginBottom: 15,
                                        padding: 1,
                                        backgroundColor: "antiquewhite",
                                        alignItems: "center",
                                        width: 100,
                                        borderColor: "red",
                                        borderWidth: 2,
                                        borderRadius: 5

                                    }}>

                                        <Text style={{ fontWeight: "bold", fontSize: 11 }}>{pokemonObj.name.toUpperCase()}</Text>

                                        <Image
                                            source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonObj.id}.png` }}
                                            style={{ width: 60, height: 60 }}
                                        />

                                        <PokeButton
                                            title="Detalhes"
                                            onPress={
                                                () => {
                                                    navigation.navigate("PokemonModal", { url: pokemonObj.url })
                                                }
                                            }
                                        />
                                    </View>
                                )
                            }
                        )
                    }
                </View>
            </ScrollView>
        )
    }

    return (
        <View style={
            {
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "center"
            }
        }>
            <Text>Pokedex Screen</Text>
            

            {renderPokemons()}


        </View>
    )

}

export default PokedexScreen