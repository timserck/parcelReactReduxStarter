import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addCounter, removeCounter, resetCounter} from '../../../store/actions/counter'

type State = {
  
}

type Props = {
  count:number,
  handleIncrease:void,
  handleDecrease:void,
  handleReset:void
}


class Counter extends PureComponent<Props, State> {
  render() {
    return (
      <div> 
        <h1> Counter </h1>
        <h1> {this.props.count} </h1>
        <button onClick={this.props.handleIncrease}> Increase </button>
        <button onClick={this.props.handleDecrease}> Decrease </button>
        <button onClick={this.props.handleReset}> Reset </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter.index,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleIncrease: addCounter,
    handleDecrease: removeCounter,
    handleReset: resetCounter,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);