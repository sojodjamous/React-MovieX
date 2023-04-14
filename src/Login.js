import React from "react";

function Login(){
    
    // const[email,setemail]=React.useState('');
    // const[password,setpassword]=React.useState('');
    // const hand=async () =>{
    //     let r=await fetch("AIzaSyC-URYUFAlCkeqoaGLfAcDVmpqD6A8CRJU",{
    //         method:'post',
    //         body:json.stringify({email,password})
    //     })
    // }


return(
    <div>
    
    <div className="auth-form-containe">
        <h1 className="tit">Login</h1>
        <form className="login-form" >
            <label htmlFor="email">Your Email</label>
            <br/>
            <input type="email"  id="email" name="email" />
            <br/>
            <label htmlFor="password">Your password</label>
            <br/>
            <input  type="password"  id="password" name="password" />
            <br/>
            <br/>
            <button type="submit">Log In</button>
            <br/>
        </form>
        
    </div>
    </div>
)
}
export default Login;




       
