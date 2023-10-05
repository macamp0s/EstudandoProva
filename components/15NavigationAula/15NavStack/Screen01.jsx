import { useEffect, useState } from "react"
import { Button, View, Text, TextInput, StyleSheet, Pressable, Image, ScrollView, FlatList, SectionList } from "react-native";
import MyStyle from "./MyStyle";
import MyFancyModal from "./MyFancyModal";




const student={name:"Sycrano", grade:"A+"}

//pra navegar toda screen recebe essa prop tamo quebrando ela aqui e pegando a propriedade navigation aqui
const Screen01=({navigation})=>{        

    //variavel de estado pra mostrar o myfancymodal
    const [modalVisible, setModalVisible] =useState(false)
    
    return(
        <View style={MyStyle.container}>
            <Text style={MyStyle.header}>
                Screen01
            </Text>
            
            <Button title="Ir para 02"
                   // o primeiro parametro que passamos é o nome da tela, podemos usar virgula e o segundo parametro é  o objeto que quero passar :)
              onPress={()=>navigation.navigate("Screen02",student)}></Button>

            <Button title="mostra modal"
                   // o primeiro parametro que passamos é o nome da tela, podemos usar virgula e o segundo parametro é  o objeto que quero passar :)
              onPress={()=>setModalVisible(true)}></Button>

              <MyFancyModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
              ></MyFancyModal>


        </View>
    )
}

export default Screen01