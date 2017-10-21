                                                // Don't touch this code its just for Sir

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { connect} from 'react-redux';

function mapStateToProps(state) {
    return{...state}
}
function mapDispatchToProps(dispatch) {
    return {
        hellochange: () => dispatch({type:'SUNDAY'}),
        worldchange: () => dispatch({type:'TONIGHT'})
    }
}

function reducer1(state='Hello',action) {
  switch(action.type) {
      case 'SUNDAY' : {
          return state = 'SUNDAY';
      }
  }
  return state;
}
function reducer2(state='World',action) {
    switch(action.type) {
        case 'TONIGHT' : {
            return state = 'TONIGHT';
        }
    }
    return state;
  }
const reducer = combineReducers({
    reducer1,
    reducer2
})
const store = createStore(reducer);
store.subscribe(() => {
    console.log(store.getState())
})

class ChangeText extends Component {
   render() {
       console.log(this.props)
       return (
           <div>
               <div>{this.props.reducer1}</div>
               <div>{this.props.reducer2}</div>
               <button onClick={this.props.hellochange}>Change Hello</button>
               <button onClick={this.props.worldchange}>Change World</button>
           </div>
           
           
       )
   }
}
const ForRender = connect(mapStateToProps, mapDispatchToProps)(ChangeText)
ReactDOM.render(
<Provider store={store}>
<ForRender/>
</Provider>
,document.getElementById('root'))




                                // Don't touch this code its just for Sir


                                // Redux webcode

