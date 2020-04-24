import React, { Component } from 'react';
import './ColorList.css';

class Box extends Component { 
	render(){
		const { style, onLeftClick, onRightClick, id, color } = this.props;
		return <div className="Box" style={style} onClick={(e)=>{e.preventDefault();onLeftClick({id,color})}}onContextMenu={(e)=>{e.preventDefault();onRightClick(id);}}></div>
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

			e.target.value='';
			this.id ++;
		}
	}
	render() {
		const { list, onLeftClick, onRightClick } = this.props;
		return (
			<div>
				<form className="ColorList">
					<input type="text" placeholder="원하는 색을 입력하세요" onKeyPress={this.onPressEnter}/>

					<div className="BoxWrap">
						{
							list && list.map(item =>
							{return <Box style={{backgroundColor:item.color, opacity: item.opacity}} key={item.id} id={item.id} onLeftClick={onLeftClick} color={item.color} onRightClick={onRightClick}/>})
						}
					</div>
				</form>

				
			</div>
		);
	}
}

export default ColorList;
