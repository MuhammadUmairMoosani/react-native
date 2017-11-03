import React, { Component } from 'react';
import * as firebase from 'firebase';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import {Link} from 'react-router-dom';
import {RaisedButton} from 'material-ui';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            value: 1,
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
    render() {
        localStorage.setItem('DonorShow',this.state.value) 
        
        const style = {
            margin: 12,
          };
        const divstyle = {
         marginTop:100
        }
        return (
            <div style={divstyle} >
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
        <Link   to="/SubSearch" ><RaisedButton  label="SEARCH"   primary={true} style={style} /></Link><br />
        <br />
        <Link   to="/BloodStock" ><RaisedButton  label="BLOOD STOCK"   primary={true} style={style} /></Link>
            </div>
        )
    }
}

export default Search;