import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const numItems = 8;

var cards;

refreshImages();

class App extends Component {
    
    renderCard(imageIndex) {
        return (
            <div className="card">
                <img src={cards[imageIndex].imageURL} alt="found on internet" />
                <h1>{cards[imageIndex].title}</h1>
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
                    {this.renderCard(1)}
                    {this.renderCard(2)}
                    {this.renderCard(3)}
                    {this.renderCard(4)}
                    {this.renderCard(5)}
                    {this.renderCard(6)}
                    {this.renderCard(7)}
                    {this.renderCard(8)}
                </div>
            
            </div>
        );
    }
}

export default App;

function refreshImages() {
	//Rebuild the array of cards by grabbing a new image for each one.
	var result = [numItems];
	
	for (var i = 0; i < numItems; i++) {
		var cardObject = {
			imageURL: getRandomImageUrl(),
			title: getRandomQuote(),
			description: "DESC"
		};
		result.push(cardObject);
        sleep(100);
	}
	
	cards = result;
}

function getRandomImageUrl() {
    
	//Get the URL of a random image.
	
    var sig = Math.floor(Math.random()*1000);
    
    return "https://source.unsplash.com/random/480x360?sig=" + sig;
}

function getRandomQuote() {
	
	var quote = "Designing for clients that don't appreciate the value of design is like buying new tires for a rental car.";
    
    return quote;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function loadData(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
           console.log(xhttp.responseText);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}