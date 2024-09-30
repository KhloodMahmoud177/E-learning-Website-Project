import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Container className="form-container mt-5 p-4">
      <h1 className="text-center">WELCOME BACK!</h1>
      <h2 className="text-center">Please Log In To Your Account</h2>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter Your Email Address"
            className="input-field"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Enter Your Password"
            className="input-field"
          />
        </Form.Group>


        <Form.Group className="mb-3 d-flex justify-content-around">
          <Form.Check type="radio" label="Student" name="role" />
          <Form.Check type="radio" label="Teacher" name="role" />
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>

        <div className="d-grid">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="signup-link">
              Sign up
            </Link>
          </p>
          <div className="d-grid">
          <Button variant="primary" type="submit" className="login-button">
            Log In
          </Button>
        </div>
        </div>
      </Form>
    </Container>
  );
}
