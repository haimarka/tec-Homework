import React from 'react'

export default function Authentication({auth}) {
    // const [email,setEmail] = useState(false)
    // const [password,setPassword] = useState(false)
    return (
        <div>
            <h3>authentication</h3>
            <h4 style={{color: 'blue'}}>{auth.email}</h4>
            <p>{auth?'user is in':'user is out'}</p>
        </div>
    )
}
