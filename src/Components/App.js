import React, { Component } from 'react';
import { connect } from 'react-redux';
import incrementActionCreator from './ActionCreator';

const App = (props) => {
        return (
            <div>
                <input type="button" value="increment" onClick={() => props.onIncrement()} />
                <input type="button" value="decrement" onClick={() => props.onDecrement()} />
                {props.count}
            </div>
        )
}

const mapStateToProps = state => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch(incrementActionCreator()),
        onDecrement: () => dispatch({ type: "DECREMENT" }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);