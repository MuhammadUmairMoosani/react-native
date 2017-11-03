import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import FaSearch from "react-icons/lib/fa/search";
import FaAlignLeft from "react-icons/lib/fa/align-left";
import FaHeartbeat from "react-icons/lib/fa/heartbeat";
import {Link} from 'react-router-dom';
import {AppBar,TextField,RaisedButton} from 'material-ui';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import * as firebase from 'firebase';
import BloodBank from '../HomePages/blood_bank';
import MyDetails from '../HomePages/my_details';
import Search from '../HomePages/search';
import { connect } from 'react-redux';



const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;



function mapStateToProps(state) {
  return{con:state}
}
function mapDispatchToProps(dispatch) {
  return {
    calldis: () => dispatch({ type: 'A' })
  }
}



class ShowPage extends Component {


    render() {
   
        switch(this.props.get) {
            case 0: {
              return  <Search roon={this.props.roni.con}/>
            }
            case 1: {
              return <BloodBank roon={this.props.roni.con}/>
            }
            case 2: {
              return  <MyDetails roon={this.props.roni.con}/>
            }
        }
    }
}
class NavigationPage extends Component {
    state = {
    selectedIndex: 0,
    page:<Search/>
  };


  

  select = (index) => this.setState({selectedIndex: index});
  signOut() {
    firebase.auth().signOut()
}

  render() {
  
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
      <div>
             <AppBar
  title="Blood Bank"
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
    <Paper zDepth={1}>
      <BottomNavigation selectedIndex={this.state.selectedIndex}>
        <BottomNavigationItem
          label="SEARCH"
          icon={<FaSearch style={{fontSize:'30'}}/>}
          onClick={() => this.select(0)}
        />
        <BottomNavigationItem
          label="BLOOK BANK"
          icon={<FaHeartbeat style={{fontSize:'30'}}/>}
          onClick={() => this.select(1)}
        />
        <BottomNavigationItem
          label="MY DETAILS"
          icon={<FaAlignLeft style={{fontSize:'30'}}/>}
          onClick={() => this.select(2)}
        />
      </BottomNavigation>
    </Paper>
    <div>     
      </div>
      <ShowPage get={this.state.selectedIndex} roni={this.props}/>
    </div>
  );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NavigationPage);