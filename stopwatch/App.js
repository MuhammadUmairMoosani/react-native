import React, { Component } from 'react';
import {Text,View,AppRegistry,StyleSheet} from 'react-native';
import DayItem from './src/day_item.js';
import moment from 'moment';
var DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

export default class Weekdays extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.days()}
      </View>
    )
  }
  days () {
    return DAYS.map( (day,key) => {
       return <DayItem day={day} key={key} />
    })
  }
}
const styles = StyleSheet.create({
 container: {
   flex:1,
   justifyContent: 'center',
   alignItems: 'center',
 }
})


AppRegistry.registerComponent('stopwatch',Weekdays);