import React, { Component } from 'react';
import * as firebase from 'firebase';
import FaAngleLeft from "react-icons/lib/fa/angle-left";
import {Link} from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {AppBar,TextField,RaisedButton} from 'material-ui';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

var sun;
var array;
let AP = ['A+','A-','O+','O-'];
let OP = ['O+','O-'];
let BP = ['B+','B-','O+','O-'];
let ABP = ['A+','O+','B+','AB+','A-','O-','B-','AB-'];
let AM = ['A-','O-'];
let OM = ['O-'];
let BM = ['B-','O-'];
let ABM = ['AB-','A-','B-','O-']
let showMe = [];
class Blood_Bank extends Component {
    render() {
        const color = {
            backgroundColor:'#CC1100',
            color:'white'
        }
        let saveValue = this.props.roon;
        let currenU = firebase.auth().currentUser.email;
        let showThis = '';
        saveValue.map((value) => {
          if(value.currentUser === currenU) {
                    showThis = value;
  
                    var a = value.I_want_to_be_a_Donor;
          }
        })
      //  switch(showThis.bloodgroup) {
      //   case "B+": {
      //         saveValue.map((value) => {
      //           // switch(value.bloodgroup) {
      //           //   case 'B+':
      //           //   return showMe.push(value);
      //           //   break;
      //           //   case 'B-':
      //           //   return showMe.push(value);
      //           //   break;
      //           //   case 'O+':
      //           //   return showMe.push(value);
      //           //   break;
      //           //   case 'O-':
      //           //   return showMe.push(value);
      //           //   break;
      //           // }
      //           showMe.push('sakahi')
      //         })
      //       }
      //  }
      //  console.log(showMe)

    showMe =[];
      switch(showThis.bloodgroup) {
        case "A+": {
           saveValue.map((value) => {
            switch(value) {
              case 'A+':
              return showMe.push(value);
              break;
              case 'A-':
              return showMe.push(value);
              break;
              case 'O+':
              return showMe.push(value);
              break;
              case 'O-':
              return showMe.push(value);
              break;
            }
          })
        }
        break;
        case "O+":  {
           saveValue.map((value) => {
            switch(value) {
              case 'O+':
              return showMe.push(value);
              break;
              case 'O-':
              return showMe.push(value);
              break;
            }
          })
        }
        break;
        case "B+": {
           saveValue.map((value) => {
            switch(value.bloodgroup) {
              case 'B+':
              return showMe.push(value);
              break;
              case 'B-':
              return showMe.push(value);
              break;
              case 'O+':
              return showMe.push(value);
              break;
              case 'O-':
              return showMe.push(value);
              break;
            }
          })
        }
        break;
        case "AB+":  {
           saveValue.map((value) => {         
            switch(value) {
              case 'A+':
              return showMe.push(value);
              break;
              case 'O+':
              return showMe.push(value);
              break;
              case 'B+':
              return showMe.push(value);
              break;
              case 'O-':
              return showMe.push(value);
              break;
              case 'AB+':
              return showMe.push(value);
              break;
              case 'A-':
              return showMe.push(value);
              break;
              case 'AB-':
              return showMe.push(value);
              break;
              case 'B-':
              return showMe.push(value);
              break;
            }
          })
        }
        break;
        case "A-": {
           saveValue.map((value) => { 
            switch(value) {
              case 'A-':
              return showMe.push(value);
              break;
              case 'O-':
              return showMe.push(value);
              break;
            }
          })
        }
        break;
        case "O-": {
           saveValue.map((value) => {
            switch(value) {
              case 'O-':
              return showMe.push(value);
              break;
            }
          })
        }
        break;
        case "B-": {
           saveValue.map((value) => { 
            switch(value) {
              case 'B-':
              return showMe.push(value);
              break;
              case 'O-':
              return showMe.push(value);
              break;
            }
          })
        }
        break;
        case "AB-": {
           saveValue.map((value) => {
            switch(value) {
              case 'AB-':
              return showMe.push(value);
              break;
              case 'A-':
              return showMe.push(value);
              break;
              case 'B-':
              return showMe.push(value);
              break;
              case 'O-':
              return showMe.push(value);
              break;
            }
          })
        }
        break;
      }
      
        return (
            <div>
            <div style={color}>Blood donor list for Bloodgroup: <b>{showThis.bloodgroup}</b></div>
            <div><SwitchPage/></div>
            </div>
        )
    }
}
class SwitchPage extends Component {
  constructor() {
    super();
    this.state = {
      display: false
    }
  }
  ShowSelectedList(items) {
       this.state.display = items;
       this.setState({display:this.state.display})
  }
  render() {   
    
    
          if(this.state.display === false) {
            return (
                <div>
                  <div>
                  <ShowHere go={this.ShowSelectedList.bind(this)}/>
                  <div>
                  </div>   
                  </div>
                </div>
            )} else if (this.state.display === true) {
              return (
                <div><DisItems go={this.ShowSelectedList.bind(this)}/></div>
              )
            }
        }
}

class ShowHere extends Component {
render() {
  return (
    <div>
      
     <List>
       {showMe.map((h,index) => {                  
         return <div key={index} onClick={() =>{this.props.go(true),sun = index}}><ListItem 
           primaryText={
             <p><b> {h.name}</b><span style={{color: lightBlack}}></span></p>
           }
           secondaryText={
        
             <p>BloodGroup: {h.bloodgroup}<br/>City: {h.city}<span style={{color: darkBlack}}></span></p>
           
           }
           secondaryTextLines={2}
         /></div>
        })}
       </List>
    </div>
  )
}
}

class DisItems extends Component {
  render() {
    const style = {
      margin: 12,
    };
    let arr = showMe[sun];
    return (
      <div>
        <div>
        <AppBar
              title="Donor Details"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              showMenuIconButton={false}
              titleStyle={
                  {fontFamily:'Arial',
                    fontSize:'300',
                    fontWeight:'bold'}
              }
              />
        </div>
      <div>
      <Table   >
          <TableBody displayRowCheckbox={false} >
            <TableRow>
              <TableRowColumn></TableRowColumn>
              <TableRowColumn></TableRowColumn>
              <TableRowColumn></TableRowColumn>
              <TableRowColumn></TableRowColumn>
              <TableRowColumn></TableRowColumn>
            </TableRow>
            <TableRow >
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
              <TableRowColumn><b>Name:</b></TableRowColumn>
              <TableRowColumn>{arr.name}</TableRowColumn>
              <TableRowColumn></TableRowColumn>
            </TableRow>
            <TableRow >
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
              <TableRowColumn><b>S/o,D/o,W/o:</b></TableRowColumn>
              <TableRowColumn>{arr.sonof}</TableRowColumn>
              <TableRowColumn></TableRowColumn>
            </TableRow>
            <TableRow >
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
              <TableRowColumn><b>Gender:</b></TableRowColumn>
              <TableRowColumn>{arr.sex}</TableRowColumn>
              <TableRowColumn></TableRowColumn>
            </TableRow>
            <TableRow >
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
              <TableRowColumn><b>BloodGroup:</b></TableRowColumn>
              <TableRowColumn>{arr.bloodgroup}</TableRowColumn>
              <TableRowColumn></TableRowColumn>
            </TableRow>
            <TableRow >
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
              <TableRowColumn><b>Address:</b></TableRowColumn>
              <TableRowColumn>{arr.address}</TableRowColumn>
              <TableRowColumn></TableRowColumn>
            </TableRow>
            <TableRow >
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
              <TableRowColumn><b>City:</b></TableRowColumn>
              <TableRowColumn>{arr.city}</TableRowColumn>
              <TableRowColumn></TableRowColumn>
            </TableRow>
            <TableRow >
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
              <TableRowColumn><b>Cell No:</b></TableRowColumn>
              <TableRowColumn>{arr.contactNo}</TableRowColumn>
              <TableRowColumn></TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <RaisedButton onClick={() => {this.props.go(false)}} label="BACK" primary={true} style={style} />
      </div>
    )
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export default Blood_Bank;