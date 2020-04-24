import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorList from '../components/ColorList';
import { addColorBox } from '../store/modules/counter';

class ColorListContainer extends Component {
  render() {
    const { addColorBox } = this.props;
    return (
      <ColorList onEnter={addColorBox}/>
    )
  }
}

const mapStateToProps = state => ({
  color : state.counter.color,
})

const mapDispatchToProps = (dispatch) => ({
  addColorBox : color => dispatch(addColorBox(color))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorListContainer)
