import React, { Component } from 'react';
import { StyleSheet, Text, View,AsyncStorage,TextInput,TouchableOpacity} from 'react-native';

export default class App extends Component {
 constructor(props) {
   super(props);
   this.state={
     show: false,
     text: '',
     email:'',
     pass:'',
     inemail:'',
     inpass:'',
   }
  
    }
    
   

  render() {
    return (
      <View style={styles.container}>
        {this.state.show === true ?      <View>
        <TouchableOpacity onPress={() => this.setState({show:false})}>
        <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <TextInput style={styles.name} placeholder={'Name'}  onChangeText={(text) => this.setState({text})} value={this.state.text}/>
        <TextInput style={styles.createEmail} placeholder={'Email address'} onChangeText={(email) => this.setState({email})} value={this.state.email}/>
        <TextInput style={styles.createPass} placeholder={'Password'} secureTextEntry={true} onChangeText={(pass) => this.setState({pass})} value={this.state.pass}/>
        <TouchableOpacity  style={styles.addButton} onPress={this.addName.bind(this)}>
        <Text style={styles.signUpButton}>Sign Up</Text>
        </TouchableOpacity>
      </View> : this.state.show === false ?   <View>
        <TextInput style={styles.signInEmail} placeholder={'Email address'} onChangeText={(inemail) => this.setState({inemail})} value={this.state.inemail}/>
        <TextInput style={styles.signInPass} secureTextEntry={true} placeholder={'Password'} onChangeText={(inpass) => this.setState({inpass})} value={this.state.inpass}/>
        <TouchableOpacity onPress={this.SignIn.bind(this)}>
        <Text style={styles.signInButton}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({show: true})}  >
    <Text style={styles.createAccountButton}>Create Account</Text>
  </TouchableOpacity>
       
      </View> : null } 
      {this.state.show === 'logout' ? 
      <View>
        <Text>Welcome {this.state.text}</Text>
        <TouchableOpacity onPress={() => this.setState({show:false,inemail:'',inpass:''})}>
        <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
        </View> : null}
      </View>
    );
  }
  addName() {
 
      this.setState({name: this.state.name})
      this.setState({email: this.state.email})
      this.setState({pass:this.state.pass})
      if(this.state.text === '') {
        alert('Fill  Name')
      } else if(this.state.email === '') {
        alert('Fill Email')
      } else if(this.state.pass === '') {
        alert('Fill it Password')
      } else {
        this.setState({show:'logout'})
      }
  }

  SignIn() {
    this.setState({inemail: this.state.inemail})
    this.setState({inpass: this.state.inpass})
   if(this.state.inemail != '') { 
     if(this.state.inpass != '') { 
      if(this.state.email === this.state.inemail) {
        if(this.state.pass === this.state.inpass) {
             this.setState({show:'logout'})
        } else { alert('Please type correct Password'),this.setState({inpass: ''})}
    } else {alert('Please type correct Email'), this.setState({inpass: ''}), this.setState({inemail: ''}) }
     }
   }
  
  }
}








// class CreateAccount extends Component {
//   render() {
//     return (
 
//     )
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    marginBottom:150,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrong: {
    backgroundColor:'red',
    color:'blue',
  },
  signInButton: {
    color:'white',
    backgroundColor:'#4388BE',
    borderWidth:1,
    borderColor: '#4388BE',
    padding:5,
    width:100,
    marginTop:10,
    borderRadius:20,
    textAlign:'center',
    fontWeight:'bold',
    fontSize:20,
    marginLeft:'22%',
  },
  signInEmail: {
    marginTop:10,
    padding:10,
    width:200,
    textAlign:'center',
  },
  signInPass: {
    marginTop:10,
    padding:10,
    width:200,
    textAlign:'center',
  },
  createAccountButton: {
    color:'white',
    backgroundColor:'#4388BE',
    borderWidth:1,
    borderColor: '#4388BE',
    padding:5,
    width:200,
    marginTop:10,
    borderRadius:20,
    textAlign:'center',
    fontWeight:'bold',
    fontSize:20,
  },
  backButton: {
    color:'white',
    backgroundColor:'#4388BE',
    borderWidth:1,
    borderColor: '#4388BE',
    padding:5,
    width:100,
    marginTop:10,
    borderRadius:20,
    textAlign:'center',
    fontWeight:'bold',
    fontSize:20,
    marginLeft:'22%',
  },
  name: {
    marginTop:10,
    padding:10,
    width:200,
    textAlign:'center',
  },
  createEmail: {
    marginTop:10,
    padding:10,
    width:200,
    textAlign:'center',
  },
  createPass: {
    marginTop:10,
    padding:10,
    width:200,
    textAlign:'center',
  },
  signUpButton: {
    color:'white',
    backgroundColor:'#4388BE',
    borderWidth:1,
    borderColor: '#4388BE',
    padding:5,
    width:100,
    marginTop:10,
    borderRadius:20,
    textAlign:'center',
    fontWeight:'bold',
    fontSize:20,
    marginLeft:'22%',
  },
  logout: {
    backgroundColor:'#F34B67',
    padding:10,
    color:'white',
    textAlign:'center',
  }


});
