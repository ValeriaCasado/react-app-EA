import React, { Component } from 'react';
import ContactPage from './js/js-components/ContactPage.js'
import MainPage from './js/js-components/MainPage.js';
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
                <li><a href="default.asp">BUY</a></li>
                <li><a href="news.asp">LETTINGS</a></li>
                <li><a href="/contact">LOCAL AREA</a></li>
                <li><a href="about.asp">MARKETING</a></li>
                <li><a href="/contact">ABOUT</a></li>
                </div>
      </ul>
      <Route path="/" exact component={MainPage} />
      <Route path="/contact" component={ContactPage} />
        <p>;{this.state.apiResponse}</p>
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