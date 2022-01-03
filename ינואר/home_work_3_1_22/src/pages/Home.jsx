import React from 'react'

export default function Home({auth}) {
    
    return (
        <div>
            <h3>home</h3>
            <p>{auth?'user is in':'user is out'}</p>
        </div>
    )
}
