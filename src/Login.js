import React from 'react';
import usersData from './users.json';
import "./App.css"

export default function Login({ handleLogin }){
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');




 
  function handleUsernameChange(e){
    setUsername(e.target.value)
  }



  function handlePasswordChange(e){
    setPassword(e.target.value);

  }


  const handleSubmit = (e) => {
    e.preventDefault();
  
  



   
    const user = usersData.users.find((data) => data.username === username && data.password === password);

    if (user) {
      handleLogin(user);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <center>

   
    <form onSubmit={handleSubmit}>
      <div>
        <label >Username:</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label >Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button type="submit" className='buttonStyle'>Login</button>
    </form>
    </center>
  );
};


