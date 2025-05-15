// src/pages/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Keep Link

// Removed import Header and Footer
// Removed import useNavigate

const Login = ({ onLogin }) => {
  // const navigate = useNavigate(); // Removed unused navigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (password === 'password123') {
      onLogin({ username: email, email: email, id: 'mock-user-123' });
      // Navigation is handled by onLogin in App.js
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    // Removed min-h-screen flex flex-col and flex-grow as centering is now done in App.js Route element
    <div className="bg-white p-6 rounded shadow-md w-80">
      <h2 className="text-xl font-bold mb-4">Login</h2>

      {error && <p className="text-red-500 text-center mb-3">{error}</p>}

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full text-white p-2 rounded hover:opacity-90"
          style={{ backgroundColor: '#2E8BC0' }}
        >
          Login
        </button>

        <p className="text-sm text-center mt-4 text-gray-600">
          Don't have an account?{' '}
          <Link
            to="/register"
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;