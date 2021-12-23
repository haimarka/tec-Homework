import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/userContext'

export default function Level4() {
    const user = useContext(UserContext)
    return (
        <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.adress}</p>
        </div>
    )
}
