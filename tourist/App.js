import React, { Component } from 'react';
import {View,Text,AppRegistry,TouchableHighlight,TextInput,StyleSheet} from 'react-native';
import * as firebase from 'firebase';
import auth from 'firebase';


  
  var config = {
    apiKey: "AIzaSyD668KY1X-Zy7hPK8w8eB9V7z0J8vZo_pw",
    authDomain: "tourist-5ea70.firebaseapp.com",
    databaseURL: "https://tourist-5ea70.firebaseio.com",
    projectId: "tourist-5ea70",
    storageBucket: "tourist-5ea70.appspot.com",
    messagingSenderId: "684341092286"
  };
  firebase.initializeApp(config);


export default class Tourist extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pass: '',
      flag: false,
      signUpName: '',
      signUpEmail: '',
      SignUpPass: '',
    }
  }

  regis() {
    const emailadd = this.state.email;
    const passadd = this.state.pass;
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(emailadd,passadd);
  }
  changeflag() {
      var a = true;

      this.setState({flag: a});
  }
  render() {
    return (
         <View style={styles.container}>
           <View style={styles.signin}>
             <TextInput placeholder={'Email'} style={styles.inputemail} underlineColorAndroid='transparent' onChangeText={(text) => {this.setState({email: text})}}/>
             <TextInput placeholder={'Password'} style={styles.inputpass} underlineColorAndroid='transparent' onChangeText={(text) => {this.setState({pass: text})}}/>
             <TouchableHighlight onPress={this.regis.bind(this)}><Text>Sign In</Text></TouchableHighlight>
             <TouchableHighlight onPress={this.changeflag.bind(this)}><Text>Create Account</Text></TouchableHighlight>
            </View>
            <View>
            <TextInput placeholder={'Name'} style={styles.inputemail} underlineColorAndroid='transparent' onChangeText={(text) => {this.setState({signUpName: text})}}/>
             <TextInput placeholder={'Email'} style={styles.inputpass} underlineColorAndroid='transparent' onChangeText={(text) => {this.setState({signUpEmail: text})}}/>
             <TextInput placeholder={'Password'} style={styles.inputpass} underlineColorAndroid='transparent' onChangeText={(text) => {this.setState({SignUpPass: text})}}/>
            </View>
          </View>
        
    )
  }
}
const styles=StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signin: {
    
  },
  inputemail: {
    width: 90
  },
  inputpass: {
    width: 90
  
  }

  }
)
AppRegistry.registerComponent('torist', Tourist);