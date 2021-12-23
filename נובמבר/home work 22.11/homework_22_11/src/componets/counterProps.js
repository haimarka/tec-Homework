import React from "react";

class CounterProps extends React.Component{
    state = {count: this.props.num}
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

export default CounterProps;