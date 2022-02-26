import React from 'react';
import {View, Platform, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';

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

                {/*elemeto "text" e "Input" é um componente pertencente ao react-native-elements */}
                <Text style={styles.texto}>Login: </Text>
                <Input leftIcon={{type: "font-awesome", name: "envelope", color:'white'}} 
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
                <Input leftIcon={{type: "font-awesome", name:"lock", color:'white'}} 
                            placeholder=" Digite sua senha" 
                                style={styles.input}
                                secureTextEntry={true} 
                                onChangeText= { 
                                    (valor)=>{  
                                        this.setState({
                                            senhaADM: valor,
                                            ...this.state
                                        })
                                    }} />
                {/* <StatusBar style="auto" />  */}
                
                <Button onClick={ ()=> this.atualizarEstado(this.state.emailADM, this.state.senhaADM) }
                     style={ { marginTop: '10%',  marginBottom: '10%'}}
                     buttonStyle ={{ backgroundColor: '#c001a7', borderRadius: 50, marginTop: '9%', height: 35}}     
                     icon={ {name: 'sign-in', type: 'font-awesome', size: 20, color: 'white'} }
                     title= "Entrar"
                />


                <Button onClick={ 
                                  ()=>{  this.props.telaInicial(null); }
                                }
                     buttonStyle ={{ backgroundColor: 'white', borderRadius: 50, marginTop: '3%', height: 35}}  
                     containerStyle ={{ }}   
                     icon= {{name:'step-backward', type:'font-awesome', size: 20, color: 'gray' }}
                     title= "Voltar"
                     titleStyle = {{color: 'gray'}}
                />



                {/*
                    <TouchableOpacity onClick={ ()=> this.atualizarEstado(this.state.emailADM, this.state.senhaADM) }
                           style={styles.loginButton }>
                            <Text style={styles.loginText}> Entrar </Text>
                    </TouchableOpacity>
                */}
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
    sombraBotao: {
      marginTop: '9%',
      marginLeft: '6%',
      width: '90%',
      height: '30%',
      backgroundColor: '#c001a7',
      borderRadius: 50,
      justifyContent: 'center',
      textAlign: 'center',

      ...(Platform.OS === "android") ? 
                { elevation: 40, shadowColor: '#52006A', shadowOpacity: 0.8 } :
                shadowBoxForIOS(10, 10, '#52006A', 0.8, 3), 
    },
    
    loginText: {
      fontSize: 27,
      color: 'white'
    },
   
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