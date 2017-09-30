import React, { Component } from 'react';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import {
  View,
  Text,
  AppRegistry,
  StyleSheet
} from 'react-native';
import {InputNote,NoteButton,Noteheader,ShowItems} from './src/services/services';

export default class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      listArray: [],
      changeText: ''
    }
  }
  arrayHandler = () => {
    var gettext = this.state.changeText;
    this.state.listArray.push(gettext);
    this.setState({listArray: this.state.listArray,changeText: ''})
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.showtask}>
          <Noteheader />
        <ShowItems array={this.state.listArray} check={this.state.changeText} />
        </View>
       <View style={styles.enternote}>
       <InputNote style={styles.noteinput} change={this.TextHandler} />
       <NoteButton style={styles.notebutton} ary={this.arrayHandler} />
       </View>

      <KeyboardSpacer/>
      </View>
    )
  }
  TextHandler = (text) => {
   this.setState({changeText: text})
   
  }
}
const styles = StyleSheet.create({
 container: {
   flex:1
 },
 showtask: {
  flex:10,
  backgroundColor:'#FFFBFA'
 },
 enternote: {
   flexDirection:'row',
 flex:1,
 justifyContent: 'flex-end',
 marginBottom:10
 },
 noteinput: {
 },
notebutton: {

}
})
AppRegistry.registerComponent('todo-app-lap-assignment',TodoApp);