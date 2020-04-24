import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorList from '../components/ColorList';
import { addColorBox, adjustOpacity, deleteBox } from '../store/modules/counter';

class ColorListContainer extends Component {
  render() {
    const { addColorBox, list, adjustOpacity, deleteBox } = this.props;
    return (
      <ColorList onEnter={addColorBox} list={list} onLeftClick={adjustOpacity} onRightClick={deleteBox}/>
    )
  }
}

const mapStateToProps = state => ({
  color : state.counter.color,
  list : state.counter.list
})

const mapDispatchToProps = {
  addColorBox,
  adjustOpacity,
  deleteBox
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorListContainer)
