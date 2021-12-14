import React from "react";
// import * as styles from "./Memory_game.module.css";

export default class MemoryGame extends React.Component {
    state = { array: [], gameSeconds: 0, history: [] }
    NUMS = 6;
    timer = null;

    componentDidMount() {
        this.cardsNums()
        this.timeInGame()
    }

    cardsNums = () => {
        let temp = this.state.array;
        for (let i = 0; i < this.NUMS; i++) {
            temp.push(1 + Math.floor(Math.random() * 6))
        }
        this.setState({ array: temp })
    }

    timeInGame = () => {
        this.setState({ gameSeconds: 0 })
        this.timer = setInterval(() => {
            this.setState({ gameSeconds: this.state.gameSeconds + 1 })
        }, 1000)
    }

    stopTimeInGame = () =>{
        clearInterval(this.timer)
        this.timer = null;
    }

    render() {
        const { array } = this.state;
        return (
            <section className="Conteiner">
                {array.map((it, i) => {
                    return (<div key={i}>
                        <button>{it}</button>
                    </div>)
                })}
                <p>{this.state.gameSeconds}</p>
                {/* <button onClick={() => this.setState({ history: this.getHistory() })}>show history</button> */}
            </section>
        )
    }
}