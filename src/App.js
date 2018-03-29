import React, { Component } from 'react';
import logo from './logo.svg';
import loadingIcon from './loading.svg';
import quoteData from './quotesData.json';
import './App.css';

function Card(props) {
	
	return (
		<div className="card">
			<img src={props.src} onLoad={props.onLoad} alt="from unsplash.com" />
			<h1>{props.quote}</h1>
			<h2>{props.credit}</h2>
		</div>
	);
}

class App extends Component {
    
	constructor(props) {
		super(props);
        
        this.state = {
            imagesLoaded: false,
            cards: [],
            numItems: 6,
            numLoaded: 0,
            quotes: quoteData
        };
        
		this.refreshImages();
	}
	
	refreshImages() {
        
		this.setState({imagesLoaded: false});
        this.setState({cards: []});
        this.setState({numLoaded: 0});
		
		var result = [];
		
		for (var i = 0; i < this.state.numItems; i++) {
            
            var quoteObject = this.getRandomQuote();
            
			var cardObject = {
				imageURL: this.getRandomImageUrl(),
				quote: quoteObject[0],
                credit: quoteObject[1]
			};
            
			result.push(cardObject);
			
			//Sleep between requests so Unsplash doesn't block us for overloading it.
			this.sleep(500);
		}
        
        this.setState({cards: result});
	}
	
	loadedImage() {
		var newNumLoaded;
		//I don't know why this needs a -1 but it does.
		if (this.state.numLoaded < this.state.numItems-1) {
			newNumLoaded = this.state.numLoaded+1;
			this.setState({numLoaded: newNumLoaded});
		} else {
			newNumLoaded = this.state.numLoaded+1;
			this.setState({numLoaded: newNumLoaded});
            this.setState({imagesLoaded: true});
		}
		
	}
	
	getRandomImageUrl() {

		//Get the URL of a random image.

		var sig = Math.floor(Math.random()*1000);

		return "https://source.unsplash.com/random/480x360?sig=" + sig;
	}
	
	getRandomQuote() {

		var quote = "Inspiring quote goes here.";
        var credit = "Speaker Name";
        var numQuotes = this.state.quotes.length;
        
        var selector = Math.floor(Math.random() * numQuotes);
        
        quote = this.state.quotes[selector].quote;
        credit = this.state.quotes[selector].credit;
        
        var result = [quote, credit];
        
		return result;
	}
	
    handleClick() {
        this.refreshImages();
    }
    
	sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	renderCard(i) {
		return (
			<Card 
				src={this.state.cards[i].imageURL}
				quote={this.state.cards[i].quote}
				credit={this.state.cards[i].credit}
				onLoad={this.loadedImage.bind(this)}
			/>
		);
        
	}
	
    render() {
		
		if (this.state.imagesLoaded) {
            /*-- Ready state screen --*/
			return (
                <div className="App">
					<header className="App-header">
						<h1 className="App-title">InterView: Inspiring Quotes and Imagery</h1>
                        <button className="Button" onClick={this.handleClick.bind(this)}>Get more inspiration</button>
						<p className="App-desc"><a href="http://reactjs.org" target="_blank" rel="noopener noreferrer">Built with React</a></p>
					</header>
                
					<div className="cardWrapper" style={{visibility:'visible'}}>
						{this.renderCard(0)}
						{this.renderCard(1)}
						{this.renderCard(2)}
						{this.renderCard(3)}
						{this.renderCard(4)}
						{this.renderCard(5)}
					</div>
				</div>
			);
		} else {
            /*-- Loading state screen --*/
			return (
				<div className="App">
					<header className="App-header">
						<h1 className="App-title">InterView: Inspiring Quotes and Imagery</h1>
						<p className="App-desc"><a href="http://reactjs.org" target="_blank" rel="noopener noreferrer">Built with React</a></p>
					</header>

                    <img src={loadingIcon} className="App-loading" alt="loading" />
                    <p>Loading images from <a href="http://unsplash.com">unsplash.com</a></p>
                    <em>Loading icon courtesy of <a href="http://loading.io">loading.io</a></em>
                
					<div className="cardWrapper" style={{visibility:'hidden'}}>
						{this.renderCard(0)}
						{this.renderCard(1)}
						{this.renderCard(2)}
						{this.renderCard(3)}
						{this.renderCard(4)}
						{this.renderCard(5)}
					</div>
                        
				</div>
			)
		}
    }
}

export default App;