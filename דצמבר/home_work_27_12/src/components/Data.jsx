import React from 'react'
import Spinner from './Spinner.jsx'
import { useFetch } from './useFetch.js'

export default function Data() {
    const getReddit = useFetch("https://www.reddit.com/r/reactjs.json")
    const elements = getReddit.Data.map((info,i)=>(
        <div key={i}>
            <p >{info.data.title}</p>
        </div>
        ))
    return (
        <div>
            {getReddit.isLoading?<Spinner/>:""}
            {getReddit.error?"error":""}
            {elements}
        </div>
    )
}
