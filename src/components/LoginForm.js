import React , { Component } from 'react';
import  { View, Text, TouchableOpacity, TextInput } from 'react-native';

class LoginForm extends Component{
    state = { text: '' };
    render(){
        return(
            <TouchableOpacity>
                <TextInput onChangeText={text => this.setState({text})} 
                style={{borderColor:'black', backgroundColor: 'grey'}}/>
                <Text style={{color: 'blue', fontSize: 30}}>
                    Log in
                </Text>
            </TouchableOpacity>
        );
    }
}

export default LoginForm;