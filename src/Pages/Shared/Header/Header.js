import React from "react";
import { useContext } from "react";
import { Image, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import logo from "../../../logo.png";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate('/login')
      })
      .catch((err) => console.error(err));
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link className="me-4" to={'/'}>
          {" "}
          <Image src={logo} style={{ width: "189px" }}></Image>{" "}
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {!user ? (
              <Nav>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </Nav>
            ) : (
              <div className="d-flex align-items-center">
                {!user.photoURL ? (
                  <div className="nav-link">
                    <FaUser></FaUser>
                  </div>
                ) : (
                  <Image
                    roundedCircle
                    src={user?.photoURL}
                    style={{ height: "30px", width:"30px", objectFit:"cover", border:"1px solid white", padding:"2px"}}
                  ></Image>
                )}
                <NavDropdown
                  title={user.displayName ? user.displayName : "No Name"}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item onClick={handleLogOut}>
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
