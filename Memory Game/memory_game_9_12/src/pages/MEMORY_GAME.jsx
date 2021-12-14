import React, { Component } from 'react'
import * as styles from './MEMORY_GAME3.module.css';

export default class MEMORY_GAME3 extends Component {
    state = {
        imageArray: [
            { id: 1, image: "https://cdn.pixabay.com/photo/2021/11/16/08/01/animal-6800387__340.jpg", click: false },
            { id: 1, image: "https://cdn.pixabay.com/photo/2021/11/16/08/01/animal-6800387__340.jpg", click: false },
            { id: 2, image: "https://cdn.pixabay.com/photo/2021/09/09/21/04/fairy-lights-6611595__480.jpg", click: false },
            { id: 2, image: "https://cdn.pixabay.com/photo/2021/09/09/21/04/fairy-lights-6611595__480.jpg", click: false },
            { id: 3, image: "https://cdn.pixabay.com/photo/2021/11/20/20/31/spekulatius-6812721__340.jpg", click: false },
            { id: 3, image: "https://cdn.pixabay.com/photo/2021/11/20/20/31/spekulatius-6812721__340.jpg", click: false },
        ],
        gameSeconsd: 0,
        startGame: false,
        moves: 0,
        gameOver: false,
    };

    timer = null;
    img_1;
    img_2;
    Attempts = 0;
    CHECK_CLICK;

    startTisGame = () => {
        this.setState({ startGame: true, gameOver: false, gameSeconsd: 0 })
        this.timeInGame()
        this.shuffleImages()

    }

    timeInGame = () => {
        this.setState({ gameSeconsd: 0 })
        this.timer = setInterval(() => {
            this.setState({ gameSeconsd: this.state.gameSeconsd + 1 })
        }, 1000)
    }

    stopTime = () => {
        clearInterval(this.timer);
        this.timer = null
    }

    shuffleImages = () => {
        this.setState({
            array: this.state.imageArray.sort(() => Math.random() - 0.5),
            moves: 0
        })
    }

    flipImages = (i)=>{
        const temp = [...this.state.imageArray]
        console.log(temp);
        if(temp[i].click){
            console.log("clicked");
            
        }
    }

    isImagesEven = (i) => {

        const temp = [...this.state.imageArray]
        temp[i].click = true
        if (this.img_1 == undefined) {
            this.img_1 = temp[i].id
            this.setState({ moves: this.state.moves + 1, imageArray: temp })
            this.CHECK_CLICK = i;
            console.log("A", this.img_1);
            this.flipImages(i)
        }
        else if (this.img_2 == undefined) {
            this.img_2 = temp[i].id
            console.log("B", this.img_2);
            if (this.img_1 == this.img_2) {
                console.log("match");
                this.setState({ moves: this.state.moves + 1, imageArray: temp })
                this.img_1 = undefined;
                this.img_2 = undefined;
                this.Attempts++;
                this.CHECK_CLICK = undefined;
                if (this.Attempts == 3) {
                    this.setState({ gameOver: true })
                    this.stopTime()
                }
            } else {
                console.log("not match");
                temp[i].click = false;
                temp[this.CHECK_CLICK].click = false;
                this.setState({ moves: this.state.moves + 1, imageArray: temp })
                this.img_1 = undefined;
                this.img_2 = undefined;
                this.CHECK_CLICK = undefined;
            }
        }
    }


    render() {
        const { imageArray, gameSeconsd, startGame, moves, gameOver } = this.state
        return (
            <div className={styles.imagesContainer}>
                {startGame ? imageArray.map((img, i) => {
                    return (
                        <div key={i} className={styles.cards}>
                            <div className={img.click?styles.card:""}></div>
                            <img onClick={() =>{{if(this.CHECK_CLICK != i){this.isImagesEven(i)}}}}  className='img' src={img.image} alt="image" />
                        </div>
                    )
                }) : ""}
                <div></div>
                <section>
                    <button onClick={() => this.startTisGame()}>start game</button>
                    <p>seconsd: {gameSeconsd} <br /> moves: {moves}</p>
                    <h1>{gameOver ? "game over" : ""}</h1>
                </section>
            </div>
        )
    }
}
