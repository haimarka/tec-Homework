import React, { Component } from "react";
import * as styles from './MemoryGame.module.css'

export default class MemoryGame extends Component {
  state = {
    array: [
      {
        id: 1,
        image:
          "https://cdn.pixabay.com/photo/2020/08/10/23/28/character-5478922_960_720.png",
        click: false,
      },
      {
        id: 1,
        image:
          "https://cdn.pixabay.com/photo/2020/08/10/23/28/character-5478922_960_720.png",
        click: false,
      },
      {
        id: 2,
        image:
          "https://cdn.pixabay.com/photo/2020/08/06/16/24/character-5468439_960_720.png",
        click: false,
      },
      {
        id: 2,
        image:
          "https://cdn.pixabay.com/photo/2020/08/06/16/24/character-5468439_960_720.png",
        click: false,
      },
      {
        id: 3,
        image:
          "https://cdn.pixabay.com/photo/2020/07/10/07/01/naruto-5389800_960_720.png",
        click: false,
      },
      {
        id: 3,
        image:
          "https://cdn.pixabay.com/photo/2020/07/10/07/01/naruto-5389800_960_720.png",
        click: false,
      },
    ],
    startGame: false,
    gameSeconds: 0,
    moves: 0,
    gameOver: false,
  };

  timer = null;
  img_1;
  img_2;
  attempts = 0;
  

  startMemoryGame = ()=>{
     this.setState({ array: [
        {
          id: 1,
          image:
            "https://cdn.pixabay.com/photo/2020/08/10/23/28/character-5478922_960_720.png",
          click: false,
        },
        {
          id: 1,
          image:
            "https://cdn.pixabay.com/photo/2020/08/10/23/28/character-5478922_960_720.png",
          click: false,
        },
        {
          id: 2,
          image:
            "https://cdn.pixabay.com/photo/2020/08/06/16/24/character-5468439_960_720.png",
          click: false,
        },
        {
          id: 2,
          image:
            "https://cdn.pixabay.com/photo/2020/08/06/16/24/character-5468439_960_720.png",
          click: false,
        },
        {
          id: 3,
          image:
            "https://cdn.pixabay.com/photo/2020/07/10/07/01/naruto-5389800_960_720.png",
          click: false,
        },
        {
          id: 3,
          image:
            "https://cdn.pixabay.com/photo/2020/07/10/07/01/naruto-5389800_960_720.png",
          click: false,
        },
      ], startGame: true ,gameSeconds: 0 , moves: 0 ,gameOver: false})
     this.stopTime();
     this.timeInGame();
     this.shuffle();
     this.attempts = 0;
  }

  timeInGame = ()=>{
      this.setState({ gameSeconds: 0 })
    this.timer = setInterval(()=>{
        this.setState({gameSeconds: this.state.gameSeconds +1})
    },1000)
  }

  stopTime = ()=>{
      clearInterval(this.timer)
      this.timer = null

  }

  isGameOver = ()=>{
    if(this.attempts == 3){
      this.setState({gameOver: true })
      this.stopTime()
      this.shuffle()
      // const temp = [...this.state.array];
      // for (let i = 0; i < temp.length; i++) {
      //    temp[i].click = false
      // }   
    }
 
    
  }

  shuffle = () =>{
      const temp = [...this.state.array];
      for (let i = 0; i < temp.length; i++) {
        temp[i].click = false
      }
      temp.sort(() => Math.random() - 0.5 )
      temp
      this.setState({array: temp})
  }

  isCardsEven = (i)=>{
    const temp = [...this.state.array];
    if(this.img_1 === undefined){
        this.img_1 = temp[i];
        this.setState({moves: this.state.moves + 1})
        this.img_1.click = true
        console.log(this.img_1.click);
    }
    else if(this.img_2 === undefined){
        this.img_2 = temp[i];
        this.img_2.click = true
        this.setState({moves: this.state.moves + 1})
        if(this.img_1.image === this.img_2.image){
            console.log("match");
            this.img_1 = undefined;
            this.img_2 = undefined;
            this.attempts++
            this.isGameOver()

        }
        else{
            setTimeout(() => {
                console.log("not match");
            this.setState({moves: this.state.moves + 1})
            this.img_1.click = false
            this.img_2.click = false
            this.img_1 = undefined;
            this.img_2 = undefined;
            }, 1000);
        }
    }
  }

  render() {
    const { array ,startGame ,gameSeconds ,moves ,gameOver} = this.state;
    return (
      <div className={styles.cardsConteiner}>
        {startGame?array.map((img, i) => { 
         return <div key={i}>
            <button disabled={img.click} 
             onClick={()=>{this.isCardsEven(i)}} className={styles.cards}>{img.click?<img src={img.image}/>:""}</button>
          </div>;
        }):""}<br/>
      <button onClick={()=>{this.startMemoryGame()}}>start game</button> 
        <h1>seconds: {gameSeconds} moves: {moves}</h1><br />
        {gameOver?<h1 className={styles.gameOver}>{gameOver? "Game Over":""}</h1>:""}
      </div>
    );
  }
}
