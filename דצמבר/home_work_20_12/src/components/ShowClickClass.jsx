import React, { Component } from 'react'

export default class ShowClickClass extends Component {
    state = { counter: 0 }
    render() {
        const { counter } = this.state
        return (
            <div>
                <p>{counter}</p>
                <button onClick={() => this.setState({ counter: counter + 1 })}>class increment</button>
            </div>
        )
    }
}
