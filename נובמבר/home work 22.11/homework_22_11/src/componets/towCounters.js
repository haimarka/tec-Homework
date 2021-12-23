import React from "react";

class TowCounters extends React.Component {
    state = { count: 0, count2: 3 }
    incrisCount1 = () => {
        this.setState({ count: this.state.count + 1 })
    }

    incrisCount2 = () => {
        this.setState({ count2: this.state.count2 + 1 })
    }

    render() {
        return <section>
            <button onClick={this.incrisCount1}>incres</button>
            <p>{this.state.count}</p>
            <button onClick={this.incrisCount2}>incres</button>
            <p>{this.state.count2}</p>
        </section>
    }
}

export default TowCounters;