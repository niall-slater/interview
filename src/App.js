import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Card(props) {
	
	return (
		<div className="card" onClick={props.refreshImages}>
			<img src={props.src} onLoad={props.onLoad} alt="from unsplash.com" />
			<h1>{props.title}</h1>
		</div>
	);
}

class App extends Component {
    
	constructor(props) {
		super(props);
		this.state = {
			imagesLoaded: false,
			cards: [],
			numItems: 9,
			numLoaded: 0
		};
		this.refreshImages();
	}
	
	refreshImages() {
		
		this.setState({
			imagesLoaded: false,
			cards: [],
			numLoaded: 0
		});
		
		var result = [];
		
		for (var i = 0; i < this.state.numItems; i++) {
			var cardObject = {
				imageURL: this.getRandomImageUrl(),
				title: this.getRandomQuote()
			};
			result.push(cardObject);
			
			//Sleep between requests so Unsplash doesn't block us for overloading it.
			this.sleep(100);
		}
		
		this.state.cards = result;
	}
	
	loadedImage() {
		
		//I don't know why this needs a -1 but it does.
		if (this.state.numLoaded < this.state.numItems-1) {
			this.state.numLoaded++;
		} else {
			this.state.numLoaded++;
			this.setState({imagesLoaded : true});
		}
		
		console.log("Loaded " + this.state.numLoaded + " images. imagesLoaded=" + this.state.imagesLoaded);
	}
	
	getRandomImageUrl() {

		//Get the URL of a random image.

		var sig = Math.floor(Math.random()*1000);

		return "https://source.unsplash.com/random/480x360?sig=" + sig;
	}
	
	getRandomQuote() {

		var quote = "Designing for clients that don't appreciate the value of design is like buying new tires for a rental car.";

		return quote;
	}
	
	sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	renderCard(i) {
		return (
			<Card 
				src={this.state.cards[i].imageURL}
				title={this.state.cards[i].title}
				onLoad={this.loadedImage.bind(this)}
			/>
		);
	}
	
    render() {
        
		console.log("Rendering. imagesLoaded is " + this.state.imagesLoaded);
		
		if (this.state.imagesLoaded) {
			return (

				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">InterView: A React App</h1>
					</header>

					<div className="cardWrapper" style={{visibility:'visible'}}>
						{this.renderCard(0)}
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
		} else {
			return (
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">InterView: A React App</h1>
					</header>

					<div className="cardWrapper" style={{visibility:'hidden'}}>
						{this.renderCard(0)}
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
			)
		}
    }
}

export default App;


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