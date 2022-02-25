import React from 'react';
import {View, Platform, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Input} from 'react-native-elements';

class LoginADM extends React.Component {
    
    state = {
         emailADM: '',
         senhaADM: ''
    }

    atualizarEstado = (email, password) =>{
        this.setState({
            emailADM: email,
            senhaADM: password
        });

        alert("email: "+email);
    }

    render(){
        return (
           <View>
                <Text style={styles.titulo} h2> Bem-vindo!</Text>

                <Text style={styles.subTitulo} >Entre com sua conta de admninistrador</Text> 

                {/*elemeto "text" é um componente pertencente ao react-native-elements */}
                <Text style={styles.texto}>Login: </Text>
                <Input leftIcon={{type: "font-awesome", name: "envelope"}} 
                            placeholder=" Digite seu nickname" 
                                style={styles.input} 
                                    onChangeText ={ (value)=>{ 
                                        this.setState(
                                            { emailADM: value, 
                                               ...this.state
                                            }
                                         ) 
                                       } 
                                    }
                />

                <Text style={styles.texto}> Senha: </Text>
                <Input leftIcon={{type: "font-awesome", name:"lock"}} 
                            placeholder=" Digite sua senha" 
                                style={styles.input}
                                secureTextEntry={true} />
                {/* <StatusBar style="auto" />  */}
                
                <TouchableOpacity 
                     onClick={ ()=> this.atualizarEstado(this.state.emailADM, this.state.senhaADM) }
                          style={ [styles.loginButton, 
                                         styles.boxShadow]
                          }>
                            <Text style={styles.loginText}>Entrar</Text>
                </TouchableOpacity>
           </View>
        );

    }//render(){}
}


const styles = StyleSheet.create({
    texto: {
        color: 'white',
        marginTop: '10%'
    },
    titulo: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: '10%', 
        marginTop: '-10%' 
    },
    subTitulo:{
        color: 'white',
        marginTop: '0%',
        marginBottom: '7%'
    },
    input: {
        backgroundColor: 'white',
        width: '90%',
        height: '9%',
        marginTop: '3%'
    },
    loginButton: {
      marginTop: '20%',
      marginLeft: '6%',
      width: '90%',
      height: '15%',
      backgroundColor: '#c001a7',
      borderRadius: '8%',
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




export default LoginADM;