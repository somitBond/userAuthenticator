import React from "react";
import  ReactDOM  from "react-dom";
// import Login from"./Login"
import usersData from "./users.json"
import "./App.css"
import TextField from '@mui/material/TextField';
import { Input, InputAdornment, IconButton } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';




export default function Login({handleLogin}){
    const[username,setUsername]=React.useState("")
    const[password,setPassword]=React.useState("")
    const [showPassword, setShowPassword] = React.useState(false);


    function changeUsername(e){
        setUsername(e.target.value)
    }


    function changePassword(e){
        setPassword(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();

        const user= usersData.users.find((data)=>data.username===username&& data.password===password);

        if (user){
            handleLogin(user)
        }
        else {
            alert("invalid opereations ")
        }
    }
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      };
      
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      




    return(
        <main className="mainDesign">


              <div classname="logoSide">
                <img src={require("./logo.png")} className="logoStyleLogin"></img>
                <p className="taglineStyle"> Build UI Components 10x faster</p>
            </div>


            <div className="loginFormStyle">

            
            <form onSubmit={handleSubmit} autoComplete="off">
             
            <login className="loginStyle">
              LOGIN
            </login>
            
            

            <label htmlFor="username" className="labelStyle"> <star className="starStyle">
                *
            </star>Username</label>
           
            
            <input type="text" className="textFieldStyle" id="username"   value={username} onChange={changeUsername} />
            <br>
            </br>

            
           
            <label htmlFor="password" className="labelStyle"> <star className="starStyle">
                *
            </star>Password</label>
            
            
            

            <Input className="textFieldStyle" value={password} 
            type={showPassword ? 'text' : 'password'} onChange={changePassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />

              <div className="forgetPasswordStyle">
                <a href="#"> Forget Password? </a>
              </div>


            
            <br>
            </br>
            <button type="submit" className="loginButtonStyle" > Login </button>

            <div className="forgetPasswordStyle">
                <a href="#" id="privacyStyle"> Privacy Policy </a>
                <a href="#" id="termsStyle"> Terms and Conditions </a>
                
              </div>

              <div className="forgetPasswordStyle">
                <a href="#" id="donotStyle"> Do not have an account? </a>
                
              </div>
            
            </form>

            
           
            </div > 

           
        </main>
    )
}
