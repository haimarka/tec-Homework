import { useState } from "react";

const ThreeCounters = ()=>{
    const [counter1,setcounter1] = useState(0)
    const [counter2,setcounter2] = useState(0)
    const [counter3,setcounter3] = useState(0)
    console.log(setcounter3);
    return(
        <div>
            <h1>{counter1}</h1>
            <button onClick={()=>setcounter1(counter1+1)}>increment1</button>
            <h1>{counter2}</h1>
            <button onClick={()=>setcounter2(counter2+1)}>increment2</button>
            <h1>{counter3}</h1>
            <button onClick={()=>setcounter3(counter3+1)}>increment3</button>
        </div>
    )
}

export default ThreeCounters;