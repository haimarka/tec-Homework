import React from "react";

class Counter extends React.Component{
    state = {count: 0}
    incrisCounts = ()=>{
        this.setState({count: this.state.count +1})
    }

    render(){
        return <section>
                    <button onClick={this.incrisCounts}>incres</button>
                    <p>{this.state.count}</p>
                </section>
    }
}

export default Counter;