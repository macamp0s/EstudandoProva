import { StyleSheet } from "react-native";

const MyStyle= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"black",
        paddingTop:25
        
    },
    header:{
        fontWeight:"bold",
        fontSize:25,
        color:"brown"
    },

    secao:{
        fontWeight:"bold",
        fontSize:15,
        color:"grey",
        marginBottom:5

    },
    valores:{
        backgroundColor:"black",
        flex:1,
        padding:10,
        borderColor:"white",
        borderWidth:1,
        marginBottom:15
        
       
    },

    texto:{
        color:"white",
        fontWeight:"bold"
    },

    textohorario:{
        color:"grey",
        fontSize:12,
        fontWeight:"bold",
        marginLeft:40
    },

    textomaior:{
        fontSize:30,
        fontWeight:"bold",
        color:"white"
    }
})

export default MyStyle