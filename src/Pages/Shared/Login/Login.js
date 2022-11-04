import React, { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { logIn,setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((userCredential) => {
        // Signed in
        setError(null);
        const user = userCredential.user;
        form.reset();
        if(user.emailVerified) {
            navigate(from, { replace: true });
        }
        else {
            toast.error('Please Verify Your Email')
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(()=>{
        setLoading(false);
      })

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

        {error && (
          <div className="mb-3">
            <Form.Text className="text-danger">{error}</Form.Text>
          </div>
        )}

        <Button className="w-100" variant="dark" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
