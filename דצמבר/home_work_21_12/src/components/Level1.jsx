import React from 'react'
import Level2 from './Level2'
import { UserContext } from './context/userContext'

export default function Level1() {
  const user = {name:"haim",email:"haim@gmail.com",adress: "hermon 21"}

    return (
        <div>
            <UserContext.Provider value={user}>
            <Level2/>
            </UserContext.Provider>
        </div>
    )
}
