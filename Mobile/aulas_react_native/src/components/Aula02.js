import { useState } from "react";
import { View, Text, Image, TextInput, Button, TouchableOpacity, StyleSheet } from "react-native";
import Logo from '../assets/logo.png'
import { LinearGradient } from "expo-linear-gradient";


export default function Aula02() {
    const [nome, setNome] = useState('');
    
    return (
        <View>
            <Text>-------------------</Text>
            <Text>Aula 02 - Componentes Básicos</Text>
            <Text>Conhecendo os princpais componentes do React </Text>

            <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'}}
            style={{width: 300, height: 200}}
            />
            {/*Inserindo uma imagem diretamente do caminho do arquivo*/}
            <Image source={require('../assets/logo.png')}
            style={{width: 50, height: 50}}
            />
            {/*Inserindo imagem referenciando como componente*/}
            <Image source={{Logo}}
            style={{width: 50, height: 50}}
            />

            <TextInput
            placeholder='Digite seu nome'
            //Não preciso de arrow function
            onChangeText={setNome}
            style ={{borderWidth: 1, padding: 10, marginBottom: 10}}
            />

            <Text>Seu nome é :{nome}</Text>
            
            <Button
            title='Clique aqui'
            onPress={() => console.log(`Bem vindo ${nome}`)}
            />
            <TouchableOpacity
            style={estilos.botao}
            onPress={() => console.log(`Bem vindo ${nome}`)}
            >
                <Image source={Logo}
                style={{width:25, height: 25}}/>
            <Text style={estilos.botaoTexto}>Botão TouchableOpacity</Text>    
            </TouchableOpacity>

            <LinearGradient
            style={{height:50}}
            colors={['transparent', 'black', 'grey']}>

            </LinearGradient>
        </View>

        
    )
}

const estilos = StyleSheet.create({
    botao: {backgroundColor: 'pink', padding: 12, borderRadius: 8, alingItems: 'center'},
    botaoTexto: {color: 'white', fontSize: 16, fontWeight: 'bold'}
})
