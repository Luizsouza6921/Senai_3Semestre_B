//Aqui é onde importaremos todas as bibliotecas e componentes e utilizaremos

import { StatusBar } from 'expo-status-bar';

//todo componente visual utilizando em react native precisa ser importado
import { StyleSheet, Text, View } from 'react-native';

//componente tradicional
export default function Aula01() {
  return (
    //O componente View, corresponde ao div, main, section, header do html
    <View style={estilos.container}>
      {/*O componente Text corresponde ao p, h1, h2, h3, span do html*/ }
      <Text style={estilos.titulo}>Hello world</Text>
      <Text style={estilos.titulo}>Olá, esse é meu primeiro App!</Text>
      {/* Defino e estilizo a barra de status do dispositivo*/ }
      <StatusBar style="auto" />

      {/*Aqui Vou colocar o exercico*/ }
      <Text style={{fontSize: 20, color: 'blue', textAlign: 'left', width: 1000}}>Texto 1</Text>
      <Text style={{fontSize: 20, color: 'black', textAlign: 'right', fontWeight: 'bold', width: 1000}}>Texto 2</Text>
      <hr/>
      <Text style={{fontSize: 20, color: 'red', textAlign: 'center'}}>Texto 3</Text>
    </View>
  );
} 
//Para estilizarmos em react native, importamos o StyleSheet
// e fazermos um objeto estlização igual ao react
const estilos = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

