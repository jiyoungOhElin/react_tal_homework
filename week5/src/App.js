import React, { Component } from 'react';
import './App.css';
import ColorListContainer from './containers/ColorListContainer';
import ColorSquareContainer from './containers/ColorSquareContainer';
import CounterContainer from './containers/CounterContainer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<CounterContainer />
				<ColorSquareContainer />
				<ColorListContainer/>
			</div>
		);
	}
}

export default App;
