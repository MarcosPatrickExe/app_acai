import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform} from 'react-native';
import deviceModel from './src/images/skin nexus 4 device.png';
import logo from './src/images/logo maisAcai fundo transparente.png';

export default function App() {

  return (

    <View style={styles.container}>
        
          <Image source={deviceModel} style={{position: 'relative', zIndex: 0, height: 685, width: 360, margin: 0 }} />

          <View style={styles.loginBackground}>
              <Image source={logo} style={{position: 'relative', width: 50, height: 40 }} />

              <Text style={styles.texto}>Login: </Text>
              <TextInput placeholder=" Digite seu nickname" style={styles.input} />

              <Text style={styles.texto}>Senha: </Text>
              <TextInput placeholder=" Digite sua senha" style={styles.input} />
              {/* <StatusBar style="auto" />  */}
               
              <TouchableOpacity style={ [styles.loginButton, styles.boxShadow]}>
                  <Text style={styles.loginText}>Entrar</Text>
              </TouchableOpacity>

              
          </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      zIndex: 0,
      flex: 1,
    //  backgroundColor: "linear-gradient(to bottom, #fa0a8c, #013d84)",
      alignItems: 'center',
      justifyContent: 'center'
  },
  texto: {
      color: 'white',
      marginTop: '10%',
      marginLeft: '-73%'
  },
  input: {
      backgroundColor: 'white',
      width: '90%',
      height: '9%',
      marginTop: '3%'
  },
  loginBackground: {
      position: 'absolute',
      backgroundColor: "#7d0296", //"linear-gradient(to bottom, #7d0296, #32013d)",
    //  justifyContent: "center",
      alignItems: "center", 
      paddingTop: '20%',
      paddingBotom: '10%',
      zIndex: 5, 
      height: 497, 
      width: 283,
      marginLeft: '-2%',
      marginTop: '-2%'
  },
  loginButton: {
    marginTop: '15%',
    width: '90%',
    height: '10%',
    backgroundColor: '#c001a7',
    borderRadius: '5%',
    boxShadow: "50 50 20 40 #000000",
    justifyContent: 'center',
    textAlign: 'center'
  },
  loginText: {
    fontSize: 27,
    color: 'white'
  },
  boxShadow: (Platform.OS === "android") ? { elevation: 60, boxShadow: '#52006A' } : shadowBoxForIOS(10, 10, '#52006A', 0.8, 3)

});



function shadowBoxForIOS ( 
  xOffset, 
  yOffset, 
  shadowColorIos,
  shadowOpacity, 
  shadowRadius ) {
 
   return {
        shadowColor: shadowColorIos,
        shadowOffset: {width: xOffset, height: yOffset},
        shadowOpacity,
        shadowRadius,
   };

};
