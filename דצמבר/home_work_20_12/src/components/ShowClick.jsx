import React from 'react'

export default function ShowClick() {
    let counter = 0;
    return (
        <div onClick={() => { counter++;
            document.title = `clicks : ${counter}`;
             }} style={{width:"100%",height:"100vh"}}>
            <h2>click and look at the title</h2>
        </div>
    )
}
