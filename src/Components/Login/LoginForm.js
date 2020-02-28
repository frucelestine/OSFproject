import React from "react";
import "./LoginForm.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function LoginFom() {
  return (
    <div class="container" style={{ width: 0, height: 0, margin: 0 }}>
      <div class="modal" id="myModal">
        <Form id="form">
          <h3 className="signIn">Sign in</h3>
          <Form.Group controlId="formBasicEmail" id="formGroup">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              id="input"
              required="required"
              pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              title="Please enter a valid email address"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" id="formGroup">
            <Form.Label>Lato</Form.Label>
            <button id="forgotBtn">forgot password</button>
            <Form.Control
              className="form-control"
              type="password"
              data-toggle="password"
              id="input"
              required="required"
              pattern="(?=.*\d{1})(?=.*[a-z])(?=.*[A-Z]{1})(?=.*\W{1}).{6,}"
              title="Password must contain 1 numeric digit, 1 upper-case letter, 1 special character, at least 1 lower-case letter and must not be less than 6 characters"
            />
          </Form.Group>

          <Button variant="success" type="submit" id="loginBtn">
            LOGIN
          </Button>
          <button id="noAccountBtn">I don't have an account</button>
        </Form>
      </div>
    </div>
  );
}
