import axios from 'axios';

import { useState } from "react";


function App() {
  const [user, setUser] = useState({user_name:'', password:''});

  const loginWithUserPassword = async(e) => {
    e.preventDefault();

    console.log(user);
    try {
      const user_login = await axios.post('http://localhost:4000/api/auth/login', {...user});
      console.log(user_login);
      
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <>
      <form onSubmit={loginWithUserPassword}>
        <input type="text" placeholder="user" onChange={({target}) => {setUser({user_name: target.value, password: user.password})}} value={user.user_name} />
        <input type="password" placeholder="password" onChange={({target}) => {setUser({user_name: user.user_name, password: target.value})}} value={user.password} />

        <input type="submit" value="submit" />
      </form>
    </>
  )
}

export default App
