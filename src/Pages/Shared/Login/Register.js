import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile, verifyEmail } =
    useContext(AuthContext);
  const [error, setError] = useState(null);
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  //for terms and condition
  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const photoUrl = form.photoUrl.value;

    //check password before register
    if (password === confirm) {
      setError(null);
      createUser(email, password)
        .then((userCredential) => {
          // Signed in
          setError(null);
          const user = userCredential.user;
          console.log("Registered With", user);
          form.reset();
          updateProfile(name, photoUrl);
          handleVerifyEmail();
          toast.success('Check Your Email to verify !',{duration: 5000})
          navigate("/");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
        });
    } else {
      setError("Password Not Matched");
    }
  };

  const updateProfile = (name, photoUrl) => {
    const profile = { displayName: name, photoURL: photoUrl };
    updateUserProfile(profile)
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleVerifyEmail = () => {
    verifyEmail().then(() => {
      // Email verification sent!
      // ...
    });
  };

  return (
    <div className="w-75 mx-auto">
      <h2 className="text-center mb-3">Register</h2>
      <Form onSubmit={handleRegister} className="border rounded p-4">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name="photoUrl" type="text" placeholder="Photo URL" />
        </Form.Group>

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

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            name="confirm"
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            onClick={handleAccepted}
            label="Terms and Conditions"
          />
        </Form.Group>

        {error && (
          <div className="mb-3">
            <Form.Text className="text-danger">{error}</Form.Text>
          </div>
        )}

        <Button
          className="w-100"
          variant="dark"
          type="submit"
          disabled={!accepted}
        >
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
