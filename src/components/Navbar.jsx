<<<<<<< HEAD
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";

export function NavbarNew() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#">E-Learning</Navbar.Brand>
=======
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { useAuth } from "../statestore/Authcontext";
import './Navbar.css'

export function NavbarNew() {

  const { query, setQuery, filteredProducts } = useAuth();

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <Navbar expand="lg" className="Navbar bg-body-tertiary mb-3" style={{ backgroundColor: 'violet' }} >
        <Container fluid >
          <Navbar.Brand href="/"> WING E-Learning</Navbar.Brand>
>>>>>>> c433064 (Initial commit)
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
<<<<<<< HEAD
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                <NavDropdown title="Courses" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item as={Link} to="/courses/1">Front End Developing Using React</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/courses/2">Front End Developing Using Angular</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/courses/3">Back End Developing Using .Net</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
=======
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/dashboard">
                  Dashboard
                </Nav.Link>
                <NavDropdown title="Courses" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="/courses/1">
                    {" "}
                    Front End Developing Using React
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/courses/2">
                    Front End Developing Using Angular
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/courses/3">
                    Back End Developing Using .Net
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/Quizs">
                  Quizs
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
>>>>>>> c433064 (Initial commit)
                <Nav.Link as={Link} to="/cart">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart-check" viewBox="0 0 16 16" aria-label="Cart">
                    <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                  </svg>
<<<<<<< HEAD
                </Nav.Link>
=======
                  </Nav.Link>
>>>>>>> c433064 (Initial commit)
              </Nav>

              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
<<<<<<< HEAD
                />
                <Button variant="outline-success">Search</Button>
              </Form>
=======
                  onChange={handleSearchChange}
                  value={query}
                />
                <Button variant="btn btn-outline-dark">Search</Button>
              </Form>
              {query && (
                <div className="results">
                  <ul>
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map((course) => (
                        <li key={course.id}>
                          <Link to={`/courses/${course.id}`}>{course.title}</Link>
                        </li>
                      ))
                    ) : (
                      <li>No results found</li>
                    )}
                  </ul>
                </div>
              )}
>>>>>>> c433064 (Initial commit)
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
