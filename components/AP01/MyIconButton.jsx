import { View, Text } from "react-native"
import { PaperProvider, IconButton, MD3Colors } from "react-native-paper"
//https://callstack.github.io/react-native-paper/
//https://callstack.github.io/react-native-paper/docs/guides/icons/
import MeuModal from "./Modal";
import { useNavigation } from "@react-navigation/native";



const MyIconButton = ({ icone, nome, horario }) => {
    const navigation = useNavigation();

    return (
        <PaperProvider>
            <View style={{

                flex: 1,
            }}>

                <IconButton
                    style={{
                        height: 22,
                        width: 22
                    }}
                    icon={icone}
                    iconColor={MD3Colors.tertiary0}
                    size={22}
                    onPress={()=>navigation.navigate("MeuModal", {nome, horario})}
                    mode="contained"

                />

                
            </View>
        </PaperProvider>

    )
}

export default MyIconButton