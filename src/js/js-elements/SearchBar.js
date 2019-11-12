import React, { Component } from 'react';

const searchbar = {
    marginTop: "50px !important",
    display: "block"
}
const searchbarItem = {
    float: "left",
    display: "block",
    textAlign: "center",
    padding: "1rem",
    textDecoration: "none"
}

export default class SearchBar extends Component {
    render() {
        return(
            <div className="searchbar">
                <ul className="navbar-fp">
                <div >
                    <li className="searchbarItem"><input type="text" placeholder="Search..."></input></li>
                    <li className="searchbarItem"></li>
                    <li className="searchbarItem"></li>
                    <li className="searchbarItem"></li>
                </div>
                </ul>
            </div>
        );
    }
}