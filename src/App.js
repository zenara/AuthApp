import React, {Component} from 'react';
import { Text, View} from 'react-native';
import firebase from 'firebase';

class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyAtFlD6kI8ZaGkf61XPLRHNzKlVyFZT2JI",
      authDomain: "auth-8df5d.firebaseapp.com",
      databaseURL: "https://auth-8df5d.firebaseio.com",
      projectId: "auth-8df5d",
      storageBucket: "auth-8df5d.appspot.com",
      messagingSenderId: "20084505170"
    });
  }

  render() {
    return(
      <View>
        <Text>
          Authentication App!
        </Text>
      </View>
    );
  }
}

export default App;