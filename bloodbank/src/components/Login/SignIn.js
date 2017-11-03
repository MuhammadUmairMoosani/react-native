import React, { Component } from 'react';
import {AppBar,TextField,RaisedButton} from 'material-ui';
import FaAngleLeft from "react-icons/lib/fa/angle-left";
import { SignUp } from '../PageReference';
import {Link,NavLink} from 'react-router-dom';
import * as firebase from 'firebase';



class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email:'',
      pass:'',
      pageNavigate:'/'
    }
  }
  checkFillForm() {
    var a = localStorage.getItem( 'keys');
    var b = JSON.parse(a);
    var c =   firebase.auth().currentUser.email;
    console.log(b)
    b.map((value)=> {
      if(value.currentUser === c) {
        this.state.pageNavigate = '/Home_Page';
        this.setState({pageNavigate:this.state.pageNavigate})
        
      } else {
         this.state.pageNavigate = '/PersonalInfo';
         this.setState({pageNavigate:this.state.pageNavigate})
      }
    })
  }
  LoginWithFirebase() {
    const auth = firebase.auth();
    const signInEmail = this.state.email;
    const signInPass = this.state.pass;
    const promise = auth.signInWithEmailAndPassword(signInEmail,signInPass);
    promise.catch(e => alert(e.message));
    firebase.auth().onAuthStateChanged(firebaseUser => {
     if(firebaseUser) {
         console.log("logged in");
        this.checkFillForm();

     } else {
         console.log('not logged in');
     }
 })
  }
    render() {
        let RightIcon = <i class="fa fa-arrow-left" aria-hidden="true"></i>;
        const style = {
            margin: 12,
          };
          
        return (
            <div>

              <div>
            
  <AppBar
    title="Blood Bank"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    showMenuIconButton={false}
    titleStyle={
        {fontFamily:'Arial',
          fontSize:'300',
          fontWeight:'bold',
          marginBottom:'900'}
    }
  />
              </div>

                      <div  style={{ margin: '100px' }}>
           <div>
               <h1>SIGN IN</h1>
           </div>
              <div>
              <TextField
      hintText="Hint Text"
      floatingLabelText="Email" onChange={(text) => this.setState({email:this.state.email = text.target.value})}
    /><br />
    <TextField
      hintText="Password Field"
      floatingLabelText="Password" onChange={(text) => this.setState({pass:this.state.pass = text.target.value})}
      type="password"
    /><br />
    <Link to={this.state.pageNavigate}><RaisedButton onClick={this.LoginWithFirebase.bind(this)}   label="LogIn" primary={true} style={style} /></Link><br />
    <Link   to="/SignUp" ><RaisedButton  label="Create Account"   primary={true} style={style} /></Link>

              
              </div>
              </div> 
            </div>
        )
    }
}

export default SignIn;