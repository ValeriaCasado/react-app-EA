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
    width: '100%'
}
const inputSearch = {
    minWidth: '34vw',
    textDecoration: 'none',
    padding: "0.75rem 0.75rem 0.75rem 0.5rem",
    width: "10vw",
    margin: "1rem",
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

const tablinks = {
    backgroundColor: '#F3F3F1',
    padding: "1rem 1.5rem",
    float: "left",
    borderWidth: "0px"
   
}

const tab = {
    overflow: "hidden",
    border: "1px solid #ccc",
    marginRight: "1rem"
}

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: "none"
        }
        this.changeDisplay= this.changeDisplay.bind(this)
    }

    changeDisplay = () => {
        this.setState({
            display: "block"
        })
    }

    render() {
        return (
            <div style={bodyholder}>
            <div style={searchbar} className="container">
            <div style={tab}>
                <button style={tablinks} onclick="">Rent</button>
                <button style={tablinks} onclick="">Buy</button>
                
            </div>
                <div className="row" style={{display: this.state.display}}>
                <div className="col">
                    <select style={searchbarOption} className=" ">
                        <option value="volvo">Minimum price</option>
                        <option value="saab">£200,000</option>
                        <option value="opel">£300,000</option>
                        <option value="audi">£400,000</option>
                    </select>  
                    <select style={searchbarOption} className="">
                        <option value="volvo">Maximum price</option>
                        <option value="saab">£500,000</option>
                        <option value="opel">£1,000,000</option>
                        <option value="audi">£2,000,000</option>
                    </select>          
                    <select style={searchbarOption} className="">
                        <option value="volvo">Minimum size</option>
                        <option value="saab">£500,000</option>
                        <option value="opel">£1,000,000</option>
                        <option value="audi">£2,000,000</option>
                    </select>
                </div>
                <div className="col">
                    <select style={searchbarOption} className="">
                        <option value="volvo">Number of rooms</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                    <select style={searchbarOption} className="">
                        <option value="volvo">Number of Bathrooms</option>
                        <option value="saab">£200,000</option>
                        <option value="opel">£300,000</option>
                        <option value="audi">£400,000</option>
                    </select>  
                    <select style={searchbarOption} className="">
                        <option value="volvo">Something else</option>
                        <option value="saab">£200,000</option>
                        <option value="opel">£300,000</option>
                        <option value="audi">£400,000</option>
                    </select>
                    </div>
                    </div>
                    <div><input  onClick={this.changeDisplay} placeholder="Search..." type="text" style={inputSearch}></input>
                    <Button inside="Search" design="first"></Button></div>
            </div>
           </div>
        )
    }
}