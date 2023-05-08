import React from "react";
import  ReactDOM  from "react-dom";
import Login from"./Login"
import usersData from "./users.json"

export default function(){
  const [user,setUser]=React.useState("")

  const handleLogin=(user)=>{
    setUser(user)

  }
  const handleLogout=()=>{
    setUser(null)

  }

  return(
    <div>
      {
        user?(<div>
          <h1 className="h1Style">
            Hello {usersData.name } welcome to our site 

          </h1>
          <button onClick={handleLogout}> Logout </button>
          

        </div>):
        (<Login handleLogin={handleLogin}/>)
      }

    </div>
  )
}