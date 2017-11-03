import React, { Component } from 'react';
import * as firebase from 'firebase';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
  import Toggle from 'material-ui/Toggle';



 console.log(new Boolean( localStorage.getItem('Togal')))
  // contactNo:'',
  // address:'',
  // city:'',


 class MyDetails extends Component {
   constructor() {
     super();
     this.state = {
      enableSelectAll: false,
     }
   }
  handleToggle = (event, toggled) => {
    console.log(this.state.enableSelectAll)
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };
   
    render() {
      let divStyle = {
        width:200,
        marginLeft:'43%'
      }
      let saveValue = this.props.roon;
      let currenU = firebase.auth().currentUser.email;
      let showThis = '';
      saveValue.map((value) => {
        if(value.currentUser === currenU) {
                  showThis = value;

                  var a = value.I_want_to_be_a_Donor;
                  localStorage.setItem('Togal',a);
        }
      })
      let style={
        padding:'2'
      }
      return (
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
              <TableRowColumn>{showThis.name}</TableRowColumn>
              <TableRowColumn></TableRowColumn>
            </TableRow>
            <TableRow >
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
              <TableRowColumn><b>S/o,D/o,W/o:</b></TableRowColumn>
              <TableRowColumn>{showThis.sonof}</TableRowColumn>
              <TableRowColumn></TableRowColumn>
            </TableRow>
            <TableRow >
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
              <TableRowColumn><b>Gender:</b></TableRowColumn>
              <TableRowColumn>{showThis.sex}</TableRowColumn>
              <TableRowColumn></TableRowColumn>
            </TableRow>
            <TableRow >
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
              <TableRowColumn><b>BloodGroup:</b></TableRowColumn>
              <TableRowColumn>{showThis.bloodgroup}</TableRowColumn>
              <TableRowColumn></TableRowColumn>
            </TableRow>
            <TableRow >
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
              <TableRowColumn><b>Address:</b></TableRowColumn>
              <TableRowColumn>{showThis.address}</TableRowColumn>
              <TableRowColumn></TableRowColumn>
            </TableRow>
            <TableRow >
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
              <TableRowColumn><b>City:</b></TableRowColumn>
              <TableRowColumn>{showThis.city}</TableRowColumn>
              <TableRowColumn></TableRowColumn>
            </TableRow>
            <TableRow >
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
              <TableRowColumn><b>Cell No:</b></TableRowColumn>
              <TableRowColumn>{showThis.contactNo}</TableRowColumn>
              <TableRowColumn></TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
        <div style={divStyle}>
            <Toggle
            name="enableSelectAll"
            label="I want to be a Donor"
            onToggle={this.handleToggle}
            defaultToggled={this.state.enableSelectAll}
          />
        </div>
          {localStorage.setItem('Togal',this.state.enableSelectAll) }
          {console.log(localStorage.getItem('Togal'))}
          </div>
      );

    }
  }




// class MyDetails extends Component {
//     render() {
//         console.log(this.props.roon)
//         return (
//             <div>
//             <div>MyDetails</div>
//             </div>
//         )
//     }
// }





export default MyDetails;