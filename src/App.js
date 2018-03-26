import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var card_title = "Title";
var card_description = "Description";
var card_image = logo;

class App extends Component {
    
    //Data for the cards
    
    render() {
        
        return (
            
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">InterView: A React App</h1>
                </header>
            
                <div className="card">
                    <img src={card_image} />
                    <h1>{card_title}</h1>
                    <p>{card_description}</p>
                </div>
            
            </div>
        );
    }
}

export default App;
