// JavaScript File
import React from 'react';
 
 class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            nb: 0,
        }
    }
 
    increment() {
        this.setState({
            nb: this.state.nb + 1
        })
    }
 
    render() {
        return (
            <div>
                <NumberDisplay
                    numberToDisplay={this.props.nb}
                    textColor="red"
                />
               
            </div>
        )
    }

export default Counter;
    
    
    