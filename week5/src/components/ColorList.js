import React, { Component } from 'react';
import './ColorList.css';

class Box extends Component {
	render(){
		const { style } = this.props;
		return(
			<div className="Box" style={style}></div>
		)
	}
}

class ColorList extends Component {
	id = 1;

	onPressEnter = (e)=>{
		if(e.key === 'Enter'){
			e.preventDefault();
			
			this.props.onEnter(
				{	
					id: this.id,
					color:e.target.value,
					opacity: 1
				}
			);

			this.id ++;
		}
	}
	render() {
		const { list } = this.props;
		return (
			<div>
				<form className="ColorList">
					<input type="text" placeholder="원하는 색을 입력하세요" onKeyPress={this.onPressEnter}/>

					<div className="BoxWrap">
						{
							list && list.map(item =>
							{return <Box style={{backgroundColor:item.color}} key={item.id}/>})
						}
					</div>
				</form>

				
			</div>
		);
	}
}

export default ColorList;
