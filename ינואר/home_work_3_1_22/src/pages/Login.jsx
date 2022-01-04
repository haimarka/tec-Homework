import {useState} from 'react'
import axios from 'axios'


export default function Login({setAuth}) {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState(false)
    const API_KEY = 'AIzaSyCSD7xywuCnpvKnHnEnuoVyklqjM3tB-Pk';
    const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
    const LogIn =()=>{
        axios
        .post(URL,{
            email,
            password
        })
        .then(response=>{
            console.log(response),
            setAuth(response.data),
            setError(false)
        })
        .catch(err=>{
            console.log(err),
            setError(true)
        })
    }
    return (
        <div>
            <h3>log in</h3>
            <form onSubmit={(e)=>{
                e.preventDefault(),
                LogIn()
                }}>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="enter email" /><br />
                <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="enter password" /><br />
                <input type="submit" value="Log in now" />
            </form>
            <h3 style={{color: 'red'}}>{error?'ERROR, Somting Worng':""}</h3>
        </div>
    )
}
