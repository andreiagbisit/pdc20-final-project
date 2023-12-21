import React, {useState} from 'react';
import './Css/login.css';
import { BrowserRouter as Router, Link, Routes, Route, useNavigate } from 'react-router-dom';

const Login = ({onLogin})=> {
    const [username, setUsername] = useState ('');
    const [password, setPassword] = useState ('');  
    const handleLogin = () => {
        if (username&&password) {
            onLogin(username);
        }else{
            alert('Don’t be silly. You haven’t entered your username and/or password yet. Please do so for you to be able to login successfully.')
        };
    }
    
return(
  <Router>
    <div className="body">
        <div className="login-container">
          <div className="form-contain">
            <form>
              <img className="logo-2" src="img/logo.png"/><br></br><br></br>
              <h2 style={{color:"#fff", textShadow:"1px 1px 15px rgba(0, 0, 0, 0.7)"}}><b>Hello there, Latchet<br></br> speaking.</b></h2><br></br>
              <label>Username:</label>
                <input placeholder="Please enter your username..." type="text" value={username} onChange={(e)=> setUsername(e.target.value)}/>
              <label>Password:</label>
                <input placeholder="Please enter your password..." type="text" value={password} onChange={(e)=> setPassword(e.target.value)}/><br></br><br></br>
              <div className="login-button" style={{fontSize:"20px"}}>
                <Link to="/posts" onClick={handleLogin}>Login</Link>
              </div>
            </form>
          </div>
        </div>
    </div>
  </Router>
)
};

export default Login;