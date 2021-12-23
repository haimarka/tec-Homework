import React,{useEffect} from 'react'
import moment from 'moment'

export default function Clock() {
    useEffect(() => {
        setInterval(() => {
            let now = moment();
            document.title = now.format("DD/MM/YY HH:mm:ss")
        }, 1000);
    })
    return (
        <div>
            
        </div>
    )
}
