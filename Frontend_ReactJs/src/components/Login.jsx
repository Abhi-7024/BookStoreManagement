import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    try {
      const response = await fetch('http://localhost:8083/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        localStorage.setItem('token', result.token);
        localStorage.setItem('name',result.name)
        localStorage.setItem('email',email)
        navigate('/dashboard');
      }
      else {
        setResponse(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid" style={{ backgroundImage: 'url(https://picsum.photos/2000/1000)', backgroundSize: 'cover', height: '100vh' }}>
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-md-4 bg-dark p-5 rounded shadow text-white">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group login">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group login">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='login'>
              <button type="submit" className="btn btn-primary btn-block mx-auto d-block">Login</button>
            </div>
            <div className="text-center mt-3">
              <p>Don't have an account? <Link to="/register" className="text-white">Register here</Link></p>
            </div>
          </form>
          {response && (
            <div className="text-center mt-3">
              <p>{response.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};