//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Image} from 'react-native';
import { Button} from 'react-native-elements';

import LoginADM from './src/pages/LoginADM.js';
import logo from './src/images/logo maisAcai fundo transparente.png';
import deviceModel from './src/images/skin nexus 4 device.png';

export default function App() {

    const [entrarComoADM, alterarValorADM] = useState(null);

    return (
        <View style={styles.container}>
            <Image source={deviceModel} style={styles.celular} />

            {/*esse View representa o fundo roxo */}
            <View style={styles.loginBackground}>

                { ( entrarComoADM == true) &&( <LoginADM /> ) }

                { ( entrarComoADM == null) &&(
                    <React.Fragment>
                        <Image source={logo} style={{position: 'absolute', width: 50, height: 40, top: '3%', right: '3%'}} />
                        
                        <View style={styles.clienteIcone} leftIcon={{type: "font-awesome", name:"user"}}></View>
                        
                        <View style={styles.clienteIcone} leftIcon={{type: "font-awesome", name:"user"}}></View>
                     
                        <Button title="entrar" onPress={ ()=>alterarValorADM(true) }/>
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
    
      marginTop: '3%',
      marginBottom: '10%',
      width: '40%',
      height: '25%',
      borderRadius: '50%',
      backgroundColor: 'white'
  },
  loginBackground: {
      position: 'absolute',
      backgroundColor: "#7d0296", //"linear-gradient(to bottom, #7d0296, #32013d)",
    //  justifyContent: "center",
      alignItems: "center", 
      paddingTop: '20%',
      paddingBotom: '10%',
      height: 497, 
      width: 283,
      marginLeft: '-2%',
      marginTop: '-2%'
  },
  celular: {position: 'relative', height: 685, width: 360, margin: 0 }
});