import { useState } from "react";

const YourName = ({Name})=>{
    const [YourName,setYourName] = useState(true)
    const styles = {color: YourName?"red":"green"}
    return(
        <div>
            <h1 onClick={()=>setYourName(!YourName)} style={styles}>{Name}</h1>
        </div>
    )
}

export default YourName;