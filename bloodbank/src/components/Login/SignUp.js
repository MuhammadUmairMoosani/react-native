import React, { Component } from 'react';
import {AppBar,TextField,RaisedButton} from 'material-ui';
import FaAngleLeft from "react-icons/lib/fa/angle-left";
import {Link} from 'react-router-dom';
import * as firebase from 'firebase';



class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            email:'',
            pass:'',
            PageNavigate:'/SignUp'
        }
    }
    registerToFirebase() {
        let signUpEmail = this.state.email;
        let signUpPass = this.state.pass;
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(signUpEmail,signUpPass);
        promise.catch(e => alert(e.message))
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser) {
                console.log(firebaseUser);
                this.state.PageNavigate = '/PersonalInfo';
                 this.setState({PageNavigate:this.state.PageNavigate})
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
              iconElementLeft={
                <Link  to="/"><FaAngleLeft style={{fontSize:'50',color:'#FFFFFF'}} /></Link>
              }
              titleStyle={
                  {fontFamily:'Arial',
                    fontSize:'300',
                    fontWeight:'bold'}
              }
              />
              </div>
                      <div  style={{ margin: '100px' }}>
           <div>
               <h1>SIGN UP</h1>
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
    <Link to={this.state.PageNavigate}><RaisedButton onClick={this.registerToFirebase.bind(this)} label="Create Account" primary={true} style={style} /></Link><br />

              </div>
              </div>
            </div>
        )
    }
}

export default SignUp;





