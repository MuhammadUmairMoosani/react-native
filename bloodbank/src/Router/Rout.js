import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,Link
  } from 'react-router-dom';
  import '../App.css';
  import SignIn from '../components/Login/SignIn';
  import SignUp from '../components/Login/SignUp';
  import PersonalFrom from '../components/PersonalInfo/PersonalInfo';
  import NavigationPage from '../components/NavigationPage/NavigationPage';
  import Blood_Bank from '../components/HomePages/blood_bank';
  import MyDetails from '../components/HomePages/my_details';
  import Search from '../components/HomePages/search';
  import SubSearch from '../components/HomePages/subSearch';
  import BloodStock from '../components/HomePages/bloodStock';



class RouterReact extends Component {
    render() {
        return (
            <Router >
           <div className="App">
            <Route exact path='/' component={SignIn}/>
            <Route path='/SignUp' component={SignUp}/>
            <Route path="/PersonalInfo"  component={PersonalFrom}/>
            <Route path="/Home_Page"  component={NavigationPage}/>
            <Route path="/BloodBank" component={Blood_Bank}/>
            <Route path="/MyDetails"  component={MyDetails} />
            <Route path="/Search" component={Search}/>
            <Route path="/SubSearch" component={SubSearch}/>
            <Route path="/BloodStock" component={BloodStock}/>

            </div>
        </Router>
        )
    }
}


export default RouterReact;
