import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen01 from "./Screen01";
import Screen02 from "./Screen02";
import Screen03 from "./Screen03";

//primeira coisa é fazer um navegador navigation container ele q vai dizer cmo funciona as rotas
const Stack=createNativeStackNavigator()


const MainScreen =()=>{
    //stack.screen cada tela tenho q dizer pro navegador olha existe essa tela
    return(
        <NavigationContainer>
            
            <Stack.Navigator initialRouteName="Screen01">
                <Stack.Screen name="Screen01" component={Screen01}  options={{title:"TELA 01"}}/>
                <Stack.Screen name="Screen02" component={Screen02}/>
                <Stack.Screen name="Screen03" component={Screen03}/>


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainScreen