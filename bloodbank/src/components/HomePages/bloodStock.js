import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {AppBar,TextField,RaisedButton} from 'material-ui';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

class BloodStock extends Component {
    
    render() {
        let getItems = JSON.parse(localStorage.getItem('keys'));
        let APlus = 0;
        let OPlus = 0;
        let BPlus = 0;
        let ABPlus = 0;
        let ASub = 0;
        let OSub = 0;
        let BSub = 0;
        let ABSub = 0;
        let ItemsArray = getItems.map((items) => {
            switch(items.bloodgroup) {
             case "A+": 
             ++APlus;
             break;
             case "O+": 
             ++OPlus;
             break;
             case "B+": 
             ++BPlus;
             break;
             case "AB+": 
             ++ABPlus;
             break;
             case "A-": 
             ++ASub;
             break;
             case "O-": 
             ++OSub;
             break;
             case "B-": 
             ++BSub;
             break;
             case "AB-": 
             ++ABSub;
             break;
            }
        })
        const style = {
            margin: 12,
          };
          let bloodGroupName = ["A+","O+","B+","AB+","A-","O-","B-","AB-"];
          let bloodGroupArray = [APlus,OPlus,BPlus,ABPlus,ASub,OSub,BSub,ABSub];
        return (
            <div>
            <div>     <AppBar
              title="Blood Stock"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              showMenuIconButton={false}
              titleStyle={
                  {fontFamily:'Arial',
                    fontSize:'300',
                    fontWeight:'bold'}
              }
              /></div>
            <div>{bloodGroupArray.map((items,index) => {
                switch(items) {
                    case 0:
                    break;
                    default: { return <div>
                        <Table   >
          <TableBody displayRowCheckbox={false} >
            <TableRow >
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
              <TableRowColumn><b>{bloodGroupName[index]}</b></TableRowColumn>
              <TableRowColumn>{bloodGroupArray[index]}</TableRowColumn>
              <TableRowColumn></TableRowColumn>
              <TableRowColumn></TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
                        </div>
                    
                    
                    
                    
                    {/* <table border="0" width="100" cellSpacing="0" align="center">
                        <tr>
                        <td><b>{bloodGroupName[index]}</b></td>
                        <td>{bloodGroupArray[index]}</td>
                        </tr>
                        </table> */}
                        } 
                }
                })}</div>
            <Link to="/Home_Page"><RaisedButton label="BACK" primary={true} style={style} /></Link>
            </div>
        )
    }
}


export default BloodStock;