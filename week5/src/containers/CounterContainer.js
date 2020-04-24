// src/containers/CounterContainer.js

import React, { Component } from 'react';
import Counter from '../components/Counter';
import { increment, decrement } from '../store/modules/counter';
import { connect } from 'react-redux';

class CounterContainer extends Component {
  render(){
    const { number, increment, decrement, color } = this.props;
    return (
      <Counter 
        number={number}
        onIncrement={increment}
        onDecrement={decrement}
        color={color}
      />
    )
  }
}
  
const mapStateToProps = state => ({
  number : state.counter.number,
  color: state.counter.color
})

const mapDispatchToProps = {
  increment,
  decrement
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);