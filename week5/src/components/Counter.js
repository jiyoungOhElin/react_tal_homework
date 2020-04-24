import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
	render() {
		const { number, onIncrement, onDecrement, color } = this.props;
		const sytle = {
			color
		}
		return (
			<div className="Counter">
				<h1 style={sytle}>{number}</h1>
				<div className="btn-wrapper">
					<button onClick={onIncrement}>+</button>
					<button onClick={onDecrement}>-</button>
				</div>
			</div>
		);
	}
}

export default Counter;
