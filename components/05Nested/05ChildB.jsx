import { View, TextInput } from "react-native";

const ChildB =({dica})=>{
    return(
        <View>
            <TextInput
                style={{
                    height:40,
                    borderColor:"black",
                    borderWidth:1,
                    padding:5,
                    margin:5
                    }}
                   /*  placeholder="Insira meu nome!"*/
                   placeholder={dica}
                    >
            </TextInput>
        </View>
    )
}
export default ChildB