import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var card_title = "Title";
var card_description = "We checked a random URL and found this.";
var card_image = setTimeout(getRandomUrl, 500);

class App extends Component {
    
    renderCard() {
        var url = getRandomUrl();
        return (
            <div className="card">
                <img src={card_image} alt="found on internet" />
                <h1>{card_title}</h1>
                <p>{card_description}</p>
            </div>
        );
    }
    
    render() {
        
        return (
            
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">InterView: A React App</h1>
                </header>
                
                <div className="cardWrapper">
                    {this.renderCard()}
                    {this.renderCard()}
                    {this.renderCard()}
                </div>
            
            </div>
        );
    }
}

export default App;

function getRandomUrl() {
    
    
    
    var sig = Math.floor(Math.random()*100);
    
    return "https://source.unsplash.com/random?sig=" + sig;
    
    /*
	var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	
    for( var i=0; i < 6; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

	var result = "http://i.imgur.com/" + text +".jpg";
    
	return result;
    */
}