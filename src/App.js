import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const numItems = 1;

var cards;

refreshImages();

class App extends Component {
	
    renderCards(count) {
		for (var i = 0; i < count; i++) {
			this.renderCard(i);
		}
    }
    
    renderCard(imageIndex) {
		console.log(cards[imageIndex].imageURL);
		console.log(cards[imageIndex].title);
		console.log(cards[imageIndex].description);
        return (
            <div className="card">
                <img src={cards[imageIndex].imageURL} alt="found on internet" />
                <h1>{cards[imageIndex].title}</h1>
                <p>{cards[imageIndex].description}</p>
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
                
				<button onClick={refreshImages}>View the Internet</button>
			
                <div className="cardWrapper">
                    {this.renderCards(numItems)}
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
			imageURL: getRandomUrl(),
			title: "Title",
			description: "DESC"
		};
		result.push(cardObject);
	}
	
	cards = result;
}

function getRandomUrl() {
    
	//Get the URL of a random image.
	
    var sig = Math.floor(Math.random()*1000);
    
    return "https://source.unsplash.com/random?sig=" + sig;
}