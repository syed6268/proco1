import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import WorkPostingCard from './WorkPostingCard';

function Login() {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8000/api/v0/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 401) {
        throw new Error('User not found');
      }

      if (!response.ok) {
        throw new Error('Failed to login');
      }

     

      const data = await response.json();
      console.log(data);

      // Clear input fields after successful submission
      setEmail('');
      setPassword('');
      emailRef.current.value = '';
      passwordRef.current.value = '';

      // Store token in localStorage or cookie
    } catch (error) {
      console.error('Error:', error);
      alert(error.message); // Display error message in an alert box
    }

    window.location.href = 'http://localhost:3000/admin';
  };

 

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4">
        <h2 className="mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Email" value={username} onChange={(e) => setEmail(e.target.value)} ref={emailRef} />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} ref={passwordRef} />
          </div>
          <div className="mb-3">
            <select className="form-control" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          {/* Use a Link component to navigate to the admin page */}
          <Link to="/admin" className="btn btn-primary">Login</Link>
        </form>
        <p className="mt-3">Don't have an account? <Link to="/Register">Register</Link></p>
      </div>
    </div>
  );
}

export default Login;

