import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelloRN from './components/HelloRN';
import Parent from './components/05Nested/05Parent';
import State from './components/06State';
import MyTextInput from './components/07TextInput';
import JuntarFrases from './components/08JuntarFrases';
import Calculadora from './components/09Calculadora/09Calculadora';
import MyScrollView from './components/10ScrollView';
import MyFlatList from './components/11MyFlatList';
import MySectionList from './components/12SectionList';
import MyFlexbox from './components/13Flexbox/13FlexboxB';
import MyNetworking from './components/14MyNetworking/14MyNetworking';
import MainScreen from './components/15NavigationAula/15NavStack/MainScreeen';
import PokemonApp from './components/16Pokemon/PokemonApp';
import MyIconButton from './components/17MyIconButton/MyIconButton';


export default function App() {
  return (
    //<View style={estilos.container}>
      //<Text style={estilos.titulo}>Título</Text>
     //<Calculadora>
     //</Calculadora>

     //<MyScrollView></MyScrollView>

     //<MyFlatList></MyFlatList>
   
     //<MySectionList></MySectionList>

     //<MyFlexbox></MyFlexbox>

     //<MyNetworking></MyNetworking>

     //<MainScreen></MainScreen>
      
     <PokemonApp></PokemonApp>

     //<MyIconButton></MyIconButton>
    //</View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize:60, 
    fontWeight:'bold',
    color:'red'
  }
});
