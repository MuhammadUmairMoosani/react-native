///////// Firebase Testing  START

// Initialize Firebase

// import React, { Component } from 'react';
// import * as firebase from 'firebase';
// import { createStore } from 'redux';
// import { Provider, connect } from 'react-redux';
// import ReactDOM from 'react-dom';
// import BloodBank from '../HomePages/blood_bank';
// import MyDetails from '../HomePages/my_details';
// import Search from '../HomePages/search';

// var config = {
//   apiKey: "AIzaSyC12x98humHSUfbguEPnGLVu93fZtRPFz0",
//   authDomain: "bloodbank-project-a32e9.firebaseapp.com",
//   databaseURL: "https://bloodbank-project-a32e9.firebaseio.com",
//   projectId: "bloodbank-project-a32e9",
//   storageBucket: "bloodbank-project-a32e9.appspot.com",
//   messagingSenderId: "333614085651"
// };
// firebase.initializeApp(config);

// var ref = firebase.database().ref().child('blooddonor');
// var keys = [];

// ref.once('value', function (snap) {
//   snap.forEach(function (item) {
//     var itemVal = item.val();
//     var get = JSON.parse(itemVal);
//     keys.push(get);
//   })
//   runAfter();
  
// })



// //////////////// Firebase Testing END



// function runAfter() { 
// function reducer(state = keys, action) {
//   switch (action.type) {
//     case "A": {
//       return state = "A";
//     }
//   }
//   return state;
// }

// function mapStateToProps(state) {
//   return{con:state}
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     calldis: () => dispatch({ type: 'A' })
//   }
// }
// const store = createStore(reducer)



// class ReduxStore extends Component {
  
//   render() {
//     console.log("Hello ji",this.props)
//     return (
//       <div>
//         <div><BloodBank get={this.props.con}/></div>
//         <div><MyDetails get={this.props.con}/></div>
//         <div><Search get={this.props.con}/></div>
//         <button onClick={this.props.calldis}>Click</button>
//       </div>
//     )
//   }
// }

// const Contact = connect(mapStateToProps,mapDispatchToProps)(ReduxStore)

// ReactDOM.render(
// <Provider store={store}>
// <Contact/>
// </Provider>
// ,document.getElementById('root'));



// }





// ReactDOM.render(
//     <MuiThemeProvider muiTheme={muiTheme}>
// <RouterReact/>
//     </MuiThemeProvider>
// , document.getElementById('root'));
// registerServiceWorker();
