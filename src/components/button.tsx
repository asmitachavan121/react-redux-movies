import * as React from 'react';
import { Component } from 'react';

interface CounterProps {
    onClick: () => void;
}
 
interface CounterState {
    
}
 
class Counter extends React.Component<CounterProps, CounterState> {
    render() { 
        return (  
            <button onClick={this.props.onClick}>Submit</button>
        );
    }
}
 
export default Counter;