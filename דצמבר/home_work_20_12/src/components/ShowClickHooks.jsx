import React, { useState } from 'react'

export default function ShowClickHooks() {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter + 1)}>hooks increment</button>
        </div>
    )
}
