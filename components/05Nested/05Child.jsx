import { View, Image } from "react-native";

const ChildA =()=>{
    return(
        <View style={{backgroundColor:'red', flexDirection:'row', justifyContent:'center'}}>
            <Image 
                source={{uri:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"}}
                style={{height:150, width:150, backgroundColor:'blue'}}>
            </Image>
        </View>
    )
}
export default ChildA