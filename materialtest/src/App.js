import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class App extends Component {
 constructor() {
   super();
   this.state = {
     flag:false,
     array: []
   }
 }
  render() {
    if(this.state.flag === false) {
      return (
        <DataForm getflag={this.changeFlag.bind(this)} filArray={this.getArrayValue.bind(this)}/>
      )
    } else if(this.state.flag === true) {
      return (
        <DataInfo stAry={this.state.array}/>
      )
    }
  }
  getArrayValue(text) {
   this.state.array = text;
   this.setState({array:this.state.array})
  }
  changeFlag(get) {
      this.state.flag = get;
      this.setState({flag:this.state.flag});
  }
}

class DataInfo extends Component {
  render() {
    return(
      <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>First Name</TableHeaderColumn>
          <TableHeaderColumn>Middle Name</TableHeaderColumn>
          <TableHeaderColumn>Last Name</TableHeaderColumn>
          <TableHeaderColumn>Email address</TableHeaderColumn>
          <TableHeaderColumn>Date</TableHeaderColumn>
          <TableHeaderColumn>Time</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableRowColumn>{this.props.stAry[0]}</TableRowColumn>
          <TableRowColumn>{this.props.stAry[1]}</TableRowColumn>
          <TableRowColumn>{this.props.stAry[2]}</TableRowColumn>
          <TableRowColumn>{this.props.stAry[3]}</TableRowColumn>
          <TableRowColumn>{this.props.stAry[4]}</TableRowColumn>
          <TableRowColumn>{this.props.stAry[5]}</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>





    )
  }
}
class DataForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname:"",
      middlename:"",
      lastname:"",
      emailaddress:"",
      getdate:'',
      gettime:"",
      flag:false
    }
  }
  
  render() {
    if(this.state.flag === true) {
      this.props.getflag(true);
      let vaAry = [this.state.firstname,this.state.middlename,this.state.lastname,this.state.emailaddress,
      this.state.getdate,this.state.gettime]
      this.props.filArray(vaAry);
    }
    const style = {
      marginLeft: 20,
    };
    return (
      <div className="App">
       <AppBar
    title="Material-UI" 
    iconClassNameLeft="none"
  />
  <Paper zDepth={2}>
    <TextField hintText="First name" style={style} underlineShow={false} onChange={(text) =>{this.setState({firstname:text.target.value})}} />
    <Divider />
    <TextField hintText="Middle name" style={style} underlineShow={false} onChange={(text) =>{this.setState({middlename:text.target.value})}} />
    <Divider />
    <TextField hintText="Last name" style={style} underlineShow={false} onChange={(text) =>{this.setState({lastname:text.target.value})}} />
    <Divider />
    <TextField hintText="Email address" style={style} underlineShow={false} onChange={(text) =>{this.setState({emailaddress:text.target.value})}} />
    <Divider />
  </Paper>
  <hr/>
  <DatePicker hintText="Date" mode="landscape" onChange={this.onDateChange.bind(this)} />
  <TimePicker
      hintText="Time" onChange={this.onTimeChange.bind(this)}/>
    <RaisedButton label="Submit" primary={true} style={style} onClick={this.checkInfo.bind(this)}/>
      </div>
    );
  }
  checkInfo() {
    if(this.state.firstname != "" && this.state.middlename != "" && this.state.lastname != "" 
    && this.state.emailaddress != "" && this.state.getdate != "" && this.state.gettime != "") {
      console.log(this.state.flag)
      this.state.flag = true;
      this.setState({flag:this.state.flag});
      console.log(this.state.flag)
    } else {
      alert('Please fill all section of form');
    }

  }
  onDateChange(event,date) {
    this.state.getdate = JSON.stringify(date);
    this.setState({getdate:this.state.getdate})
  }
  onTimeChange(event,time) {
    this.state.gettime = JSON.stringify(time);
    this.setState({gettime:this.state.gettime})
  }
}

export default App;
