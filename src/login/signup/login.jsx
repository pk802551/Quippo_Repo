import React, { useState } from 'react';
import { Form, Button, Container, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/login.css';
import axios from 'axios';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await axios.get('http://localhost:8080/login', {
      params: {
        email: email,
        password: password,
      },
    });

    if (response.data.length > 0) {
      alert('Login Successful!');
      navigate('/homePage');
    } else {
      alert('Invalid email or password');
    }
  } catch (error) {
    console.error(error);
    alert('Login failed');
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="login-page d-flex align-items-center justify-content-center" >
      <Container className="login-container">
        <div className="login-card">
          <div className="text-center mb-4">
            <img
              src={require('../../assets/image/NewQuippo.png')}
              alt="Quippo Logo"
              className="login-logo"
            />
            <h2 className="login-title">Welcome to Quippo</h2>
            <p className="text-muted">Please log in to continue</p>
          </div>

          <Form onSubmit={handleLogin}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="password" className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              variant="warning"
              type="submit"
              className="w-100 login-btn"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner animation="border" size="sm" /> Starting Machine...
                </>
              ) : (
                'Login'
              )}
            </Button>
          </Form>

          <p className="text-center mt-3 mb-0">
            Don’t have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
