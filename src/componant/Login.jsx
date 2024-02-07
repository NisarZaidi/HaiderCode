import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // change username or password
  const UserName = "admin"
  const PassWord = "12345"

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === UserName && password === PassWord) {
      handleLogin();
      toast.success('Login successful');
    } else {
      toast.error('Invalid username or password');
    }
  };

  return (
    <div style={{height: "100%" , padding: "20px" , marginTop: "80px"}}>
      <div className="container" style={{width: "30%" , padding: "20px" , border: "1px solid black" , borderRadius: "5px"}}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
}
