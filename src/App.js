import React from 'react';
import Login from './Login';
import usersData from './users.json';
import "./App.css"

export default function App() {
  const [user, setUser] = React.useState(null);

  function handleLogin(user) {
    setUser(user);
  };

  function handleLogout (){
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h1> Hello , {user.name}!. Your email is {user.email} excited to present you my authenticator applicaton
            </h1>
          <button onClick={handleLogout} className='buttonStyle'>Logout</button>
        </div>
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </div>
  );
};
