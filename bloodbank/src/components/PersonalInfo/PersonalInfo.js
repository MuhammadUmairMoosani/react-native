import React, { Component } from 'react';
import * as firebase from 'firebase';
import {AppBar,TextField,RaisedButton} from 'material-ui';
import {Link} from 'react-router-dom';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import ImageUploader from 'react-images-upload';


import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import SelectField from 'material-ui/SelectField';
import Checkbox from 'material-ui/Checkbox';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import NavigationPage  from '../NavigationPage/NavigationPage';



class PersonalFrom extends Component {
    constructor() {
        super();
        this.state = {
            value: 1,
            checked: false,
            checked1: false,
            checked2: false,
            checked3: false,
            name:'',
            so:'',
            sex:'',
            contactNo:'',
            address:'',
            city:'',
            registerFlag: false,
            Navigation:'/PersonalInfo',
            firebaseFlag:false,
        }
    }


    signOut() {
        firebase.auth().signOut()
    }
    checkAndSendFirebase() {
      if(this.state.value !== 1 && this.state.name !== '' && this.state.so !== '' && this.state.sex !== '' && this.state.contactNo !== '' && this.state.address !== ''&& this.state.city !== '') {
        if(this.state.firebaseFlag === false) { 
        var database = firebase.database();
        let ref = database.ref('blooddonor');
       let data = {
         name: this.state.name,
         bloodgroup:this.state.value,
         sonof:this.state.so,
         sex:this.state.sex,
         contactNo:this.state.contactNo,
         address:this.state.address,
         city:this.state.city,
         Blood_transfusion_within_last_6_months: this.state.checked,
         Hypertension_Diabet_es_etc:this.state.checked1,
         Ever_had_Jaundice_Hepatitis:this.state.checked2,
         currentUser:firebase.auth().currentUser.email
       }
        ref.push(JSON.stringify(data));

      
      }
        this.state.firebaseFlag = true;
        this.setState({firebaseFlag:this.state.firebaseFlag})
        this.state.registerFlag = true;
        this.setState({registerFlag:this.state.registerFlag})
        this.setState({Navigation:this.state.Navigation = "/Home_Page"});
      } if(this.state.registerFlag === false) {
        alert("Please fill form properly")
      }
    }
    
    handleChange = (event, index, value) => this.setState({value});
    updateCheck() {
        this.setState((oldState) => {
          return {
            checked: !oldState.checked,
          };
        });
      }
      updateCheck1() {
        this.setState((oldState) => {
          return {
            checked1: !oldState.checked1,
          };
        });
      }
      updateCheck2() {
        this.setState((oldState) => {
          return {
            checked2: !oldState.checked2,
          };
        });
      }
  
   
    render() {
      console.log(firebase.auth().currentUser.email)
        const style = {
            margin: 12,
          };
        const styles = {
            block: {
              maxWidth: 250,
              margin:12
            },
            radioButton: {
              marginBottom: 16,
            },
          };

        const Logged = (props) => (
            <IconMenu
              {...props}
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <Link to='/'><MenuItem primaryText="Sign out" onClick={this.signOut.bind(this)} /></Link>
            </IconMenu>
          );


        return (
            <div >
            <div>
    
                <AppBar
    title="Registration"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    iconElementRight={ <Logged />}
    showMenuIconButton={false}
    titleStyle={
        {fontFamily:'Arial',
          fontSize:'300',
          fontWeight:'bold',
          marginBottom:'900'}
    }
  />
           
            </div>

            <div style={{ margin: '50px' }}>
                <form>
                <TextField hintText="Name" onChange={(text) => this.setState({name:this.state.name = text.target.value})}/><br />
                <TextField hintText="S/o,D/o,W/o" onChange={(text) => this.setState({so:this.state.so = text.target.value})} /><br />
                <div>
    <RadioButtonGroup name="shipSpeed">
      <RadioButton
        value="light"
        label="Male"
        style={styles.radioButton}
      style={{ display: 'inline-block', width: '150px' }}
      onClick={() => {this.setState({sex:this.state.sex = 'Male'})}}
      />
    
      <RadioButton
        value="not_light"
        label="Female"
        style={styles.radioButton}
      style={{ display: 'inline-block', width: '150px' }}
      onClick={() => {this.setState({sex:this.state.sex = 'Female'})}}
      />
    </RadioButtonGroup>
  </div>
  <TextField hintText="Contact No" onChange={(text) => this.setState({contactNo:this.state.contactNo = text.target.value})}/><br />
  <TextField hintText="Address" onChange={(text) => this.setState({address:this.state.address = text.target.value})}/><br />
  <TextField hintText="City" onChange={(text) => this.setState({city:this.state.city = text.target.value})}/><br />
  <SelectField
          floatingLabelText="Blood Group"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="Select" />
          <MenuItem value={"A+"} primaryText="A+" />
          <MenuItem value={"O+"} primaryText="O+" />
          <MenuItem value={"B+"} primaryText="B+" />
          <MenuItem value={"AB+"} primaryText="AB+" />
          <MenuItem value={"A-"} primaryText="A-" />
          <MenuItem value={"O-"} primaryText="O-" />
          <MenuItem value={"B-"} primaryText="B-" />
          <MenuItem value={"AB-"} primaryText="AB-" />
        </SelectField><br />
        <Checkbox
        label="Blood transfusion within last 6 months"
        checked={this.state.checked}
        onCheck={this.updateCheck.bind(this)}
        style={styles.checkbox}
        style={{ display: 'inline-block', width: '350px' }}
      /><br />
      <Checkbox
        label="Hypertension Diabetes etc."
        checked={this.state.checked1}
        onCheck={this.updateCheck1.bind(this)}
        style={styles.checkbox}
        style={{ display: 'inline-block', width: '350px' }}
      /><br />
      <Checkbox
        label="Ever had Jaundice / Hepatitis"
        checked={this.state.checked2}
        onCheck={this.updateCheck2.bind(this)}
        style={styles.checkbox}
        style={{ display: 'inline-block', width: '350px' }}
      /><br />
 
      <Link to={this.state.Navigation}><RaisedButton label="Register" primary={true} style={style} onClick={this.checkAndSendFirebase.bind(this)} /></Link>
                </form>
            </div>
            </div>
        )
    }
}

export default PersonalFrom;