// src/pages/Register.js
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Keep Link

// Removed import Header and Footer
// Removed import useNavigate

const Register = ({ onRegister }) => {
  // const navigate = useNavigate(); // Removed unused navigate
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    onRegister({
      username: formData.username,
      email: formData.email,
      password: formData.password,
    });
    // Navigation is handled by onRegister in App.js
  };

  return (
    // Removed min-h-screen flex flex-col and flex-grow as centering is now done in App.js Route element
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-xl font-semibold border-l-4 border-cyan-500 pl-2 mb-6">
        Register For This Site
      </h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Username</label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={formData.username}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="relative">
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            onChange={handleChange}
            value={formData.password}
            className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
          <span
            className="absolute right-3 top-9 cursor-pointer text-gray-500"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <div className="relative">
          <label className="block text-gray-700 mb-1">Confirm Password</label>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            onChange={handleChange}
            value={formData.confirmPassword}
            className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
          <span
            className="absolute right-3 top-9 cursor-pointer text-gray-500"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <p className="text-sm text-gray-500">
          Registration confirmation will be emailed to you.
        </p>

        <button
          type="submit"
          className="w-full text-white py-2 rounded hover:opacity-90"
          style={{ backgroundColor: '#2E8BC0' }}
        >
          Register
        </button>
      </form>

      <div className="flex justify-between text-sm text-gray-600 mt-4">
        <Link to="/login" className="text-blue-500 hover:underline cursor-pointer">Log in</Link>
        <Link to="" className="text-blue-500 hover:underline cursor-pointer">Forgot Password?</Link>
      </div>

    </div>
  );
};

export default Register;