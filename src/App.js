import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./styles/reset.css";
import Home from "./components/Home/Home";

  
  class App extends Component {
 render() {
      return (
          <Router>
            <div className= "App" >
              <Route exact path = "/" component = { Home } />
              <Route path="/movie" component = { Home } />
            </div >
          </Router >
        );
    }
}

  export default App;