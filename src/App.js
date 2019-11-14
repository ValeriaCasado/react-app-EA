import React, { Component } from 'react';
import ContactPage from './js/js-components/ContactPage.js'
import MainPage from './js/js-components/MainPage.js';
import AboutPage from './js/js-components/AboutPage.js';
import LocalareaPage from './js/js-components/LocalareaPage.js';
import LettingsPage from './js/js-components/LettingsPage.js';
import SalesPage from './js/js-components/SalesPage.js';
import Footer from './js/js-elements/Footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };    
  }
  render() {
    return (
      <Router>
      <div className="app-container">
      <ul className="navbar-fp">
                <div className="navbar-fp-container">
                <li><a href="/sales">SALES</a></li>
                <li><a href="/lettings">LETTINGS</a></li>
                <li><a href="/localarea">LOCAL AREA</a></li>
                <li><a href="/marketing">MARKETING</a></li>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/contact">CONTACT</a></li>
                </div>
      </ul>
      <Route path="/" exact component={MainPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/about"component={AboutPage} />
      <Route path="/lettings" component={LettingsPage}/>
      <Route path="/localarea"component={LocalareaPage} />
      <Route path="/sales"component={SalesPage} />
      
        <p>;{this.state.apiResponse}</p>
      <Footer></Footer>
      </div>
      </Router>
    ); 
  }
  callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
      this.callAPI();
  }
}

export default App;