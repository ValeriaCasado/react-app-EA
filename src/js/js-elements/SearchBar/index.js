import React, { Component } from 'react';
import Button from '../Button/'

const searchbar = {
    paddingTop: '1rem',
    paddingBottom: '1rem',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '10px', 
    marginBottom: '10px',
    backgroundColor: '#F3F3F1',
    listStyleType: 'none'
}

const bodyholder = {
    marginTop: '10px', 
    marginBottom: '10px',
    display: 'inline-block',
    width: '90vw'
}
const inputSearch = {
    minWidth: '34vw',
    textDecoration: 'none',
    padding: "0.75rem 0.75rem 0.75rem 0.5rem",
    width: "10vw",
    borderBottom: "2px solid #92959A",
    borderWidth: "0px 0px 2px 0px",
    borderRadius: "5px"
}

const searchbarOption = {
    margin: '0.5rem',
    maxWidth:'34vw',
    textDecoration: "none",
    padding: "0.7rem 1.5rem 0.7rem 1rem",
    backgroundColor: " #92959A",
    color: "#fff",
    borderRadius: "5px",
    fontSize: "15px"
}

export default class SearchBar extends Component {
    render() {
        return (
            <div style={bodyholder}>
            <div style={searchbar}>
                <div className=" cm-left">
                <div className="">
                    <select style={searchbarOption} className="searchbar">
                        <option value="volvo">No minimum price</option>
                        <option value="saab">£200,000</option>
                        <option value="opel">£300,000</option>
                        <option value="audi">£400,000</option>
                    </select>  
                    <select style={searchbarOption} className="searchbar">
                        <option value="volvo">No maximum price</option>
                        <option value="saab">£500,000</option>
                        <option value="opel">£1,000,000</option>
                        <option value="audi">£2,000,000</option>
                    </select>          
                    <select style={searchbarOption} className="searchbar">
                        <option value="volvo">No minimum size</option>
                        <option value="saab">£500,000</option>
                        <option value="opel">£1,000,000</option>
                        <option value="audi">£2,000,000</option>
                    </select>
                    </div>
                    <div className="">
                    <select style={searchbarOption} className="searchbar">
                        <option value="volvo">Number of rooms</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                    <select style={searchbarOption} className="searchbar">
                        <option value="volvo">No minimum price</option>
                        <option value="saab">£200,000</option>
                        <option value="opel">£300,000</option>
                        <option value="audi">£400,000</option>
                    </select>  
                    <select style={searchbarOption} className="searchbar">
                        <option value="volvo">No minimum price</option>
                        <option value="saab">£200,000</option>
                        <option value="opel">£300,000</option>
                        <option value="audi">£400,000</option>
                    </select>
                    </div>
                    </div>
                    <div className=""><input placeholder="Search..." type="text" style={inputSearch}></input>
                    <Button inside="Search" design="first"></Button></div>
            </div>
           
           </div>
        )
    }
}