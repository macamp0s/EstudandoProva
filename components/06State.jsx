import { Button, View, Text } from "react-native";
import { useState } from "react";

const State = ()=>{
       /* let contador = 0*/
       const[contador, setContador] = useState(0)

    return(
        <View>
            <Text> 
                Contador: {contador}
            </Text>
            <Button
            title="contar +1"

            onPress={

                ()=>{
                    //contador +=1
                    //nao posso mais modificar variavel de estado diretamente, precisa chamar o set
                    //passando como parametro o novo valor dele, ou seja, o valor anterior +1
                    setContador(contador+1)
                }
            }>

            </Button>
        </View>
    )
}

export default State