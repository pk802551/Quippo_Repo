import React, { useState } from 'react';
import '../../assets/css/signupPage.css';
import { useNavigate } from 'react-router-dom'; // Make sure react-router-dom is installed


const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    altNumber: '',
    location: '',
    password:""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    const isFormValid = Object.values(formData).every(val => val.trim() !== '');

  const handleSubmit = async (e) => {
    e.preventDefault();
        if (!isFormValid) return;
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();
      console.log('Form submitted successfully:', result);
      setMessage('Signup successful!');
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        altNumber: '',
        location: '',
        password:""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Signup failed. Please try again.');
    } finally {
            navigate('/'); // Navigate to login page
      setLoading(false);
    }
  };


  return (
      <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="altNumber"
          placeholder="Alternative Number"
          value={formData.altNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />

          <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {/* <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="Buyer">Buyer</option>
          <option value="Seller">Seller</option>
        </select> */}

        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Sign Up'}
        </button>

        {message && <p className="form-message">{message}</p>}
      </form>
    </div>
  );
};

export default SignupForm;
