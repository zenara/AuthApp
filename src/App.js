import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';


type Props = {};
export default class App extends Component<Props> {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyAtFlD6kI8ZaGkf61XPLRHNzKlVyFZT2JI',
      authDomain: 'auth-8df5d.firebaseapp.com',
      databaseURL: 'https://auth-8df5d.firebaseio.com',
      projectId: 'auth-8df5d',
      storageBucket: 'auth-8df5d.appspot.com',
      messagingSenderId: '20084505170'
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});