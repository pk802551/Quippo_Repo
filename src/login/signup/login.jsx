import React, { useState } from 'react';
import { Form, Button, Container, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/css/login.css';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8080/auth/login', credentials);
      sessionStorage.setItem('loggedInUser', JSON.stringify(response.data));
      toast.success('Login successful!');
      setTimeout(() => navigate('/'), 1500);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <ToastContainer />
      <Container className="login-form-container">
        <div className="login-card">
          <div className="login-header text-center">
            <img
              src={require('../../assets/image/NewQuippo.png')}
              alt="Quippo Logo"
              className="login-logo"
            />
            <h2>Welcome to Quippo</h2>
            <p className="text-muted">Please log in to continue</p>
          </div>

          <Form onSubmit={handleLogin}>
            <Form.Group controlId="username" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter your username"
                value={credentials.username}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="password" className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter your password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="warning" type="submit" className="w-100 login-btn" disabled={loading}>
              {loading ? (
                <>
                  <Spinner animation="border" size="sm" /> Starting Machine...
                </>
              ) : (
                'Login'
              )}
            </Button>
          </Form>

          <p className="text-center mt-3">
            Don’t have an account? <a href="/signupPage">Sign up</a>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
