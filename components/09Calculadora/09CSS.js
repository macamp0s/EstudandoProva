import { StyleSheet } from "react-native";

const estilos =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    header:{
        fontSize:22,
        fontWeight:'bold',
        color:'steelblue'
    },
    input:{
        height:40,
        width:270,
        borderColor:'black',
        borderWidth:2,
        paddingLeft:8,
        fontSize:15,
        margin:5
},
    containerBotoes:{
        flexDirection:'row',
        width:300,
        justifyContent:"space-evenly",
        marginTop:10
    }
})

export default estilos