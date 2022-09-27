import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import user from "../assets/user.jpg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const styles = {
  makeCenter: {
    display: "flex",
    justifyContent: "center",
  },
};
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const userCreated = () => toast("user created Successfully!");
  const error = () => toast("user not created!");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      userName: userName,
      password: password,
      email: email,
    };
    axios
      .post(
        "https://q53ogbw9tc.execute-api.us-east-1.amazonaws.com/registerUser",
        data
      )
      .then(() => userCreated())
      .catch((err) => error());
  };
  return (
    <>
      <Container>
        <ToastContainer />
        <h1>Sign Up</h1>
        <div style={styles.makeCenter}>
          <img
            style={{ borderRadius: "50%", width: "20%", height: "20%" }}
            src={user}
            alt="user_image"
          />
          <br />
        </div>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label>Username</Form.Label>
            <Form.Control
              placeholder="Enter username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group> 
          <div style={styles.makeCenter}>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Login;
