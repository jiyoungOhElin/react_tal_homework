import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorList from '../components/ColorList';
import { addColorBox } from '../store/modules/counter';

class ColorListContainer extends Component {
  render() {
    const { addColorBox, list } = this.props;
    return (
      <ColorList onEnter={addColorBox} list={list}/>
    )
  }
}

const mapStateToProps = state => ({
  color : state.counter.color,
  list : state.counter.list
})

const mapDispatchToProps = {
  addColorBox 
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorListContainer)
