import React, { Component } from 'react';
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
class SubSearch extends Component { 
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
                <AppBar
              title="Donor List"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              iconElementLeft={
                <Link  to="/Home_Page"><FaAngleLeft style={{fontSize:'50',color:'#FFFFFF'}} /></Link>
              }
              titleStyle={
                  {fontFamily:'Arial',
                    fontSize:'300',
                    fontWeight:'bold'}
              }
              />
              <div>
              <ShowSelectedItems go={this.ShowSelectedList.bind(this)}/>
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


class ShowSelectedItems extends Component {


  render() {
    var getItems = JSON.parse(localStorage.getItem('keys'));
    var WasSelect = localStorage.getItem('DonorShow');

    var ItemsArray = getItems.filter((items) => {
        if(items.bloodgroup === WasSelect) {
                return true
        } else {
          return false
        }
        
    })
    array = ItemsArray;
   
    return (
      <div>
        
       <List>
         {ItemsArray.map((h,index) => {                  
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
    let arr = array[sun];
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
export default SubSearch;