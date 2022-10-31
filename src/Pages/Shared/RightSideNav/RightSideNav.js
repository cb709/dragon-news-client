import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
  return (
    <div>
      <div>
        <ButtonGroup vertical id="login-button-group">
          <Button className="mb-2" variant="outline-dark">
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
      <div className="mt-3">
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
