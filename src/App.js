
import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import NavBar from './Components/nav-bar.js';
import Tabs from './Components/tabs.js';
import './App.css';
import AddContact from './Containers/add-contact.js';
import './Containers/assets/main.css'


class App extends Component {
  render() {
    return (
      <Router>
      <div id="App" className= "wrapper">
    
        <NavBar />
        <Switch>
          <Route exact path="/" component={Tabs} />
          <Route exact path="/addcontact" component={AddContact}/>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;

