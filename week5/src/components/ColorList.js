import React, { Component } from 'react';
import './ColorList.css';

class ColorList extends Component {
	onPressEnter = (e)=>{
		if(e.key === 'Enter'){
			e.preventDefault();
			this.props.onEnter(e.target.value);
		}
	}
	render() {
		return (
			<div>
				<form className="ColorList">
					<input type="text" placeholder="원하는 색을 입력하세요" onKeyPress={this.onPressEnter}/>
				</form>
			</div>
		);
	}
}

export default ColorList;
