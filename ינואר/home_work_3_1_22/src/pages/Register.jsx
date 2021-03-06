import React,{useState} from "react";
import axios from "axios";

export default function Register({setAuth}) {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState(false)
    const API_KEY = 'AIzaSyCSD7xywuCnpvKnHnEnuoVyklqjM3tB-Pk';
    const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
  const registerUser = () => {
    axios
      .post(URL, {
        email,
        password,
      })
      .then((response) => {
          console.log(response),
          setAuth(response.data),
          setError(false)
        })
      .catch((err) => {
        console.log(err),
        setError(true)
      });
  };
  return (
    <div>
      <h3>register</h3>
      <form onSubmit={(e)=>{
          e.preventDefault(),
          registerUser()
      }}>
          <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="enter email" /><br />
          <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="enter password" /><br />
          <input type="submit" value="Register Now" />
      </form>
      <h3 style={{color: 'red'}}>{error?'ERROR, Somting Worng':""}</h3>
    </div>
  );
}
