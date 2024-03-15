import React from 'react'
import { Container } from 'react-bootstrap';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header(props) {

  var Img = "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg";


  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container> 
          <Navbar.Brand href="#home">
            <img
              src={Img}
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto py-2">
              <Nav.Link >
                <input
                  type="text"
                  name=""
                  onChange={(e) => props.handler(e.target.value)}
                  placeholder="search for product brand and more"
                  style={{ width: "574px" }}
                  className="px-5 py-2"
                  id=""
                />
              </Nav.Link>

              <NavDropdown
                title="Login"
                id="basic-nav-dropdown"
                className=" border h-25 my-auto text-white align-align-items-center px-4 mx-2 border-black">
                <NavDropdown.Item className="text-dark">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item className="text-dark">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item className="text-dark">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Item className="text-dark">
                  Something
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link>
                <button className="btn py-2 border border-black px-4 mx-2">
                  Cart
                </button>
              </Nav.Link>
              <Nav.Link>
                <button className="btn py-2 border border-black px-4 mx-2">
                  Become a seller
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
