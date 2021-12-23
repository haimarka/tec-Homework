import { useState } from "react";

const YourName = ()=>{
    const [YourName,setYourName] = useState(true)
    const styles = {color: YourName?"red":"green"}
    return(
        <div>
            <h1 style={styles}>{YourName}</h1>
            <button onClick={()=>setYourName(!YourName)}>change</button>
        </div>
    )
}

export default YourName;