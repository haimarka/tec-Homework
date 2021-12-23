import React, { Component } from 'react'
import * as styles from './MEMORY_GAME3.module.css';

export default class MEMORY_GAME3 extends Component {
    state = {
        imageArray: [
            { id: 1, image: "https://cdn.wallpapersafari.com/83/72/DU7VOk.png", click: false },
            { id: 1, image: "https://cdn.wallpapersafari.com/83/72/DU7VOk.png", click: false },
            { id: 2, image: "https://c4.wallpaperflare.com/wallpaper/694/376/948/chidori-sasuke-chidori-wallpaper-preview.jpg", click: false },
            { id: 2, image: "https://c4.wallpaperflare.com/wallpaper/694/376/948/chidori-sasuke-chidori-wallpaper-preview.jpg", click: false },
            { id: 3, image: "https://www.syfy.com/sites/syfy/files/2019/08/kakashi-hatake-naruto.jpeg", click: false },
            { id: 3, image: "https://www.syfy.com/sites/syfy/files/2019/08/kakashi-hatake-naruto.jpeg", click: false },
        ],
        gameSeconsd: 0,
        startGame: false,
        moves: 0,
        gameOver: false,
        backCard: "https://pbs.twimg.com/media/EkEqPfJWoAMLtzQ.jpg"
    };

    timer = null;
    img_1;
    img_2;
    Attempts = 0;
    CHECK_CLICK;

    startMemoryGame = () => {
        // const temp = [...this.state.imageArray]
        // for (let i = 0; i < temp.length; i++) {
        //     if(temp[i].click){
        //         temp[i].image = this.state.backCard 
        //         console.log("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSS");
        //     }
        // }
        this.stopTime()
        this.setState({  startGame: true, gameOver: false, gameSeconsd: 0 })
        this.startTimeInGame()
        this.shuffleImages()

    }

    startTimeInGame = () => {
        this.setState({ gameSeconsd: 0,moves: 0 })
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

    flipImages = (i) => {
        const temp = [...this.state.imageArray]
        if(temp[i].click){
           temp[i].image = this.state.backCard 
        }
    }
    
    gameIsOver = () =>{
        const temp = [...this.state.imageArray]
        for (let i = 0; i < temp.length; i++) {
            if(temp[i].click){
                temp[i].image = this.state.backCard
                this.setState({backCard:temp[i].image})

            }
            return temp[i].click = false
                  
        }
      
    }

    giveUp = () =>{
        if(temp[i].click){}
    }

    isImagesEven = (i) => {

        const temp = [...this.state.imageArray]
        temp[i].click = true
        if (this.img_1 == undefined) {
            this.img_1 = temp[i].id
                // temp[i].image = this.state.backCard
                this.setState({ moves: this.state.moves + 1, imageArray: temp })
                this.CHECK_CLICK = i;
                console.log("A", this.img_1);
                this.flipImages(i)
                this.gameIsOver()

            
        }
        else if (this.img_2 == undefined) {
            this.img_2 = temp[i].id
            console.log("B", this.img_2);
            if (this.img_1 == this.img_2) {
                console.log("match");
                this.gameIsOver()
                this.flipImages(i)

                this.setState({ moves: this.state.moves + 1, imageArray: temp })
                this.img_1 = undefined;
                this.img_2 = undefined;
                this.Attempts++;
                this.CHECK_CLICK = undefined;
                if (this.Attempts == 3) {
                    this.setState({ gameOver: true })
                    this.stopTime()
                    this.gameIsOver()
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
            // this.setState({imageArray:temp[i].image})
        }
    }


    render() {
        const { imageArray, gameSeconsd, startGame, moves, gameOver } = this.state
        return (
            <div className={styles.imagesContainer}>
                <h1>{gameOver ? "game over" : ""}</h1>
                {startGame ? imageArray.map((img, i) => {
                    return (
                        <div key={i} className={styles.cards}>
                            <div className={img.click ? styles.card : ""}></div>
                            <img onClick={() => { { if (this.CHECK_CLICK != i) { this.isImagesEven(i) } } }} className={styles.img} src={img.image} alt="image" />
                        </div>
                    )
                }) : ""}
                <div></div>
                <section>
                    <button onClick={() => this.startMemoryGame()}>start game</button>
                    <p>seconsd: {gameSeconsd} <br /> moves: {moves}</p>
                </section>
            </div>
        )
    }
}
