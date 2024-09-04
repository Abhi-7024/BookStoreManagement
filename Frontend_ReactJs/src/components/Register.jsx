import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [registerStatus, setRegisterStatus] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = {};

    if (!name) {
      error.name = 'Name is required';
    }
    if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      error.email = 'Invalid email';
    }
    if (!password || password.length < 8) {
      error.password = 'Password should be at least 8 characters';
    }
    if (!confirmPassword || confirmPassword !== password) {
      error.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(error).length > 0) {
      setErrors(error);
    } else {
      const userData = {
        name,
        email,
        password,
      };

      fetch('http://localhost:8083/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data === 1) {
            setRegisterStatus('Registration successful!');
            setTimeout(() => {
              navigate('/login');
            }, 2000);
          } else {
            setRegisterStatus('Registration failed!');
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
          }
        })
        .catch((err) => {
          setRegisterStatus('Registration failed!!');
          console.error(err);
        });
    }
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: 'url(https://picsum.photos/2000/1000)',
        backgroundSize: 'cover',
        height: '95vh',
        marginTop: '30px',
      }}
    >
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-md-4 bg-dark bg-gradient rounded shadow text-white">
          <h2 className="text-center login">Register User</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group login">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
            </div>
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
              {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
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
              {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
            </div>
            <div className="form-group login">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && (
                <div style={{ color: 'red' }}>{errors.confirmPassword}</div>
              )}
            </div>
            <div className="login">
              <button type="submit" className="btn btn-primary btn-block mx-auto d-block">
                Register
              </button>
            </div>
            {registerStatus && (
              <div
                style={{
                  color: registerStatus === 'Registration successful!' ? 'green' : 'red',
                }}
              >
                {registerStatus}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};