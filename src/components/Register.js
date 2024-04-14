import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [access, setRole] = useState('user'); // Default role is 'user'
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`http://localhost:8000/api/v0/user/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, access }), // Pass username, password, and role
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      console.log(data);
      setRegistrationMessage('Account registered successfully');
      // Store token in localStorage or cookie
    } catch (error) {
      console.error('Error:', error.message);
      setRegistrationMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4">
        <h2 className="mb-4">Register</h2>
        {registrationMessage && <p>{registrationMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="mb-3">
            <select className="form-control" value={access} onChange={(e) => setRole(e.target.value)}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <p className="mt-3">Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Register;

// // Login.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';


// function Register() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [access, setRole] = useState('user'); // Default role is 'user'

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       console.log(username)
//       const response = await fetch(`http://localhost:8000/api/v0/user/register`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password, access }), // Pass username, password, and role
//       });

//       if (!response.ok) {
//         throw new Error('Login failed');
//       }

//       const data = await response.json();
//       console.log(data);
//       // Store token in localStorage or cookie
//     } catch (error) {
//       console.error('Error:', error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <select value={access} onChange={(e) => setRole(e.target.value)}>
//           <option value="user">User</option>
//           <option value="admin">Admin</option>
//         </select>
//         <button type="submit">Submit</button>
//       </form>
//       <p>Have an Account <Link to="/login">LogIn</Link></p>
//     </div>
//   );
// }

// export default Register;