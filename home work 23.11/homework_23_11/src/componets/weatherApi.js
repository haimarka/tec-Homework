import {Component} from "react";
import axios from 'axios';

export default class WeaterTemp extends Component{
    state = {weather: "",city: "",temp: "", tempMin: "", tempMax: "",visibility: ""}

    API_key = "4be58b6ef34254cc7a37af635d92c515";
    getWaether = ()=>{
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${this.API_key}`;
        axios
        .get(url)
        .then((response)=>{
            // const res = response.data.main.temp;
            console.log(`temp:${response.data.main.temp}`);
            console.log(`temp_min: ${response.data.main.temp_min}`);
            console.log(`temp_max:${response.data.main.temp_max}`);
            this.setState({weather: response.data})        
            this.setState({temp: response.data.main.temp})        
            this.setState({tempMin: response.data.main.temp_min})        
            this.setState({tempMax: response.data.main.temp_max})        
        })
        .catch((err)=>{
            console.log(err,"worng city name");
            // this.setState({worng: this.state.worng})        

        })
    }

    render(){
        const inputFunctionCity = (e)=>{this.setState({city: e.target.value})}
        return (
            <section>
                <h1>What's The Weather ?</h1>
                <p>enter the name of the city</p>
                <input onChange={inputFunctionCity} type="text" placeholder="name"/><br/><br/>    
                <button onClick={this.getWaether} type="submit">Submit</button>
                <h1>{this.state.city}</h1>
                <p style={{visibility: Number(this.state.temp) ? "visible":"hidden"}}>the temp is : {this.state.temp} 
                <br/>the min temp is : {this.state.tempMin}
                <br/>the max temp is : {this.state.tempMax}</p>
            </section>
        )
    }
}

