import { View } from "react-native";
import { Text } from "react-native";
import ChildA from "./05Child";
import ChildB from "./05ChildB";

const Parent = ()=>{
    return(
        <View>
            <Text style={{
                    fontSize:25,
                    fontWeight:"bold"
                        }}
            >
                Eu sou o componente pai
                </Text>
                <ChildA />
                <ChildB dica="aqui escreva seu namee" />
                <ChildB dica="aqui escreva seu sobrenameee" />
                <ChildB dica="aqui escreva seu endereco" />
        </View>
    )
}

export default Parent