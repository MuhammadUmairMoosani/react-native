import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BloodBank from './App';
import registerServiceWorker from './registerServiceWorker';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';
import {orange500} from 'material-ui/styles/colors';
import RouterReact from './Router/Rout';

import './fbconfig';

import * as firebase from 'firebase';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Blood_Bank from './components/HomePages/blood_bank';
import MyDetails from './components/HomePages/my_details';
import Search from './components/HomePages/search';






// Color
const muiTheme = getMuiTheme ({
    palette: {
        primary1Color:'#CC1100',
        accent1Color: deepOrange500,
    }
})

///////// Firebase Testing  START

// Initialize Firebase




const dbRefObject = firebase.database().ref().child('blooddonor');
var keys = [];

dbRefObject.on('value', snap =>{ 
snap.forEach(function (item) {
  var itemVal = item.val();
  var get = JSON.parse(itemVal);
  keys.push(get);
})
runAfter();
localStorage.setItem('keys',JSON.stringify(keys))
});



//////////////// Firebase Testing END

//////////////// Redux START

function runAfter() { 
function reducer(state = keys, action) {
  switch (action.type) {
    case "A": {
      state: keys
      break;
    }
  }
  return state;
}


const store = createStore(reducer)


ReactDOM.render(
    <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
     
 <RouterReact/>


    </MuiThemeProvider>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
}


///////////////////////// Redux END



