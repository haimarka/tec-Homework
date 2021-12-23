import { useState } from "react";

const Register = ()=>{
    const [{name,email,password}] = useState({name:"",email:"",password:""})


    return(
        <div>
            <form onSubmit={(e)=>{
                    e.preventDefault();
                    console.log({name:e.target.name.value,
                        email:e.target.email.value,
                        password:e.target.password.value});
                }}>
               name: <br /> <input type="text" name="name" placeholder="enter name" /><br />
               email: <br /> <input type="text" name="email" placeholder="enter email" /><br />
               password: <br /> <input type="password" name="password" placeholder="enter password" /><br /><br />
                <button>log</button>
            </form>
        </div>
    )
}

export default Register;