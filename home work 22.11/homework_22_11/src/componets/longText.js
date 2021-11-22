import React from "react";
const LongText =(props)=>{
    const styleText = {color: props.text.length >5 ?"red":"green"}
    return(
        <h2 style={styleText}>{props.text}</h2>
    )
}


export default LongText;