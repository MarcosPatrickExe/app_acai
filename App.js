//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Image} from 'react-native';
import { Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import LoginADM from './src/pages/LoginADM.js';
import logo from './src/images/MaisAcai-logo.png';
import deviceModel from './src/images/skin nexus 4 device.png';

export default function App() {

    const [entrarComo, alterarValorADM] = useState('ADM');

    return (
        <View style={styles.container}>
            <Image source={deviceModel} style={styles.celular} />

            {/*esse View representa o fundo roxo */}
            <View style={styles.loginBackground}>

                { ( entrarComo == "ADM") &&( <LoginADM telaInicial={alterarValorADM}  /> ) }

                { ( entrarComo == null) &&(
                    <React.Fragment>
                        <Image source={logo} style={{position: 'absolute', width: 50, height: 40, top: '3%', right: '3%'}} />
                        
                        <View style={styles.clienteIcone} onClick={ ()=>alterarValorADM("cliente") }>
                              <Icon name="user-circle" size={110} color="white" />
                              <Text style={{color: "white"}}>cliente</Text>
                        </View>
                        
                        <View style={styles.clienteIcone} onClick={ ()=>alterarValorADM("ADM") }>
                              <Icon name="user" size={110} color="white" />
                              <Text style={{color: "white"}}>admninistrador</Text>
                        </View>
                     
                       {/*  <Button title="entrar" onPress={ ()=>alterarValorADM(true) }/>  */}
                    </React.Fragment>
                )}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
  container: {
      zIndex: 0,
      flex: 1,
    //  backgroundColor: "linear-gradient(to bottom, #fa0a8c, #013d84)",
      alignItems: 'center',
      justifyContent: 'center'
  },
  clienteIcone: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '15%',
      marginBottom: '23%', 
      width: '38%',
      height: '25%',
      borderRadius: 80,
      backgroundColor: 'transparent'
  },
  loginBackground: {
      position: 'absolute',
      backgroundColor: "#7d0296", //"linear-gradient(to bottom, #7d0296, #32013d)",
    //  justifyContent: "center",
      alignItems: "center", 
      paddingTop: '20%',
      paddingBottom: '10%',
      height: 497, 
      width: 283,
      marginLeft: '-2%',
      marginTop: '-2%'
  },
  celular: {position: 'relative', height: 685, width: 360, margin: 0 }
});