import React,{useRef, useState} from 'react'

export default function LogInDisable() {
    const [valid,setValid] = useState(false)
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const isValid = ()=>{
        return (
            nameRef.current.value.length > 0 &&
            emailRef.current.value.length > 0 &&
            passwordRef.current.value.length > 0 )
    }
    return (
        <div>
            <h1>Log in</h1>
            <form onChange={()=>setValid(isValid())} onSubmit={(e)=>{
                e.preventDefault();
                if(isValid()){
                    console.log(
                        nameRef.current.value,
                        emailRef.current.value,
                        passwordRef.current.value
                    );
                }
            }}>
                <input ref={nameRef} type="text" placeholder='enter name' /><br />
                <input ref={emailRef} type="text" placeholder='enter email' /><br />
                <input ref={passwordRef} type="password" placeholder='enter password' /><br />
                <button disabled={!valid} type='submit'>click</button>
            </form>
        </div>
    )
}
