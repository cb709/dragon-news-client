import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const RightSideNav = () => {
  const {providerLogin} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => {
      console.error(error);
    })
  }

  return (
    <div>
      <div>
        <ButtonGroup vertical id="login-button-group">
          <Button onClick={handleGoogleLogin} className="mb-2" variant="outline-dark">
            {" "}
            <FaGoogle></FaGoogle> Login With Google
          </Button>
          <Button variant="outline-dark">
            {" "}
            <FaGithub> </FaGithub> Login With Github
          </Button>
        </ButtonGroup>
      </div>
      <div className="mt-3">
        <h6 className="mb-2">Find Us On</h6>
        <ListGroup>
          <ListGroup.Item className="mb-2"><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaWhatsapp></FaWhatsapp> What's App</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaLinkedin></FaLinkedin> Linkdin</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <div className="mt-3 mb-3">
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
