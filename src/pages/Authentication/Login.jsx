import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card, Alert, Container, Row, Col } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import * as yup from 'yup';
import { Formik } from 'formik';

// Validation schema using Yup
const loginSchema = yup.object().shape({
  email: yup.string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required')
});

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log("🚀 ~ handleSubmit ~ values:", values)
      setError('');
      setLoading(true);
      await login(values.email, values.password);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Failed to log in');
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Row className="w-100" style={{ maxWidth: '400px' }}>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="text-center mb-4">Login</Card.Title>
              
              {error && <Alert variant="danger">{error}</Alert>}
              
              <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={loginSchema}
                onSubmit={handleSubmit}
              >
                {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        isInvalid={touched.email && !!errors.email}
                        placeholder="Enter your email"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        isInvalid={touched.password && !!errors.password}
                        placeholder="Enter your password"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Button 
                      variant="primary" 
                      type="submit" 
                      className="w-100 mt-3"
                      disabled={isSubmitting || loading}
                    >
                      {loading ? 'Logging in...' : 'Login'}
                    </Button>
                  </Form>
                )}
              </Formik>

              <div className="text-center mt-3">
                <Button 
                  variant="link" 
                  onClick={() => navigate('/auth/forgot-password')}
                >
                  Forgot Password?
                </Button>
              </div>
            </Card.Body>
          </Card>

          <div className="text-center mt-3">
            Don't have an account?{' '}
            <Button variant="link" onClick={() => navigate('/auth/register')}>
              Sign Up
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;