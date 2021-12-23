import React,{useRef} from 'react'

export default function LogIn() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    return (
        <div>
            <h1>Log in</h1>
            <form onSubmit={(e)=>{
                e.preventDefault();
                console.log(
                    nameRef.current.value,
                    emailRef.current.value,
                    passwordRef.current.value
                );
            }}>
                <input ref={nameRef} type="text" placeholder='enter name' /><br />
                <input ref={emailRef} type="text" placeholder='enter email' /><br />
                <input ref={passwordRef} type="password" placeholder='enter password' /><br />
                <button type='submit'>click</button>
            </form>
        </div>
    )
}
