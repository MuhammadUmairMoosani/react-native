import React, { Component } from 'react';
import {
    TextInput,
    TouchableHighlight,
    Text,
    StyleSheet,
    View
} from 'react-native';
class InputNote extends Component {
    render() {
        return (
            <TextInput underlineColorAndroid='transparent' placeholder='Enter Task' style={styles.noteinput}
            onChangeText={(text) => this.props.change(text)} ref={'textInput1'}/>
        )
    }
}
class NoteButton extends Component {
    render() {
        return (
            <TouchableHighlight style={styles.addbutton} onPress={this.props.ary.bind(this)}>
                <Text style={styles.buttontext}>Add</Text>
            </TouchableHighlight>
        )
    }
}
class Noteheader extends Component {
    render() {
        return (
            <View style={styles.headerView}>
                <Text style={styles.headerText}>ToDo</Text>
            </View>
        )
    }
}
class ShowItems extends Component {
    show = () => {
        return this.props.array.map((value,index) => {
            return <View key={index}  style={styles.showitem}>
                
                <Text>{index + 1}</Text>
                <Text style={width= 30}>{value}</Text>
                <TouchableHighlight style={styles.delete}><Text style={styles.deletetext}>Delete</Text></TouchableHighlight>
                <TouchableHighlight style={styles.edit}><Text style={styles.edittext}>Edit</Text></TouchableHighlight>
                
                   </View>
        })
    }
    render() {
        return (
            <View>
            {this.show() }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    addbutton: {
        backgroundColor:'#FF7E7E',
        alignItems:'center',
        justifyContent:'space-around',
        borderRadius:5,
        flex:1
    },
    delete: {
        backgroundColor:'#FF7E7E',
        padding:3,
        borderWidth:1,
        borderColor:'white',
        
        
    },
    edit: {
        backgroundColor:'#FF7E7E',
        padding:3,
        borderWidth:1,
        borderColor:'white'
     
    },
    buttontext: {
        fontSize:18,
        color:'white',
        fontWeight:'bold'
    },
    deletetext: {
        fontSize:18,
        color:'white',
        fontWeight:'bold'
    },
    edittext: {
        fontSize:18,
        color:'white',
        fontWeight:'bold',
    },
    noteinput: {
        flex:3,
        backgroundColor: '#FFF0F0'
    },
    headerView: {
        backgroundColor:'#FF7E7E',
        height:60,
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:5,
        borderColor:'#F75959'
    },
    headerText: {
     
        fontWeight:'bold',
        fontSize:20
    },
    showitem: {
        flexDirection:'row',
        justifyContent: 'flex-end'
    }
})
export  {InputNote,NoteButton,Noteheader,ShowItems};