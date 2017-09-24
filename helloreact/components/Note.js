// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class todoapp extends Component {
 render() {
   return (
           <View key={this.props.keyval} style={styles.note}>

             <Text style={styles.noteText}>{this.props.val.date}</Text>
             <Text style={styles.noteText}>{this.props.val.note}</Text>

             <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                 <Text style={styles.noteDeleteText}>D</Text>
             </TouchableOpacity>

           </View>
   );
 } 
}

const styles = StyleSheet.create({
  note: {
      position: 'relative',
      padding: 20,
      paddingRight:100,
      borderBottomWidth:2,
      borderBottomColor:'#ededed',
  },
  noteText: {
      paddingLeft:20,
      borderLeftWidth: 10,
      borderLeftColor: '#E91E63',
  },
  noteDelete: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#9280b9',
      padding: 10,
      top: 10,
      bottom:10,
      right:10,
  },
  noteDeleteText: {
      color: 'white',
  }
});

AppRegistry.registerComponent('todoapp',() => todoapp);