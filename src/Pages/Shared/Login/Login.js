import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        form.reset();
        navigate('/')
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };
  return (
    <div className="w-75 mx-auto">
      <h2 className="text-center mb-3">Login</h2>
      <Form onSubmit={handleLogin} className="border rounded p-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        {/* <Form.Text className="text-danger">
          We'll never share your email with anyone else.
        </Form.Text> */}
        <Button className="w-100" variant="dark" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
