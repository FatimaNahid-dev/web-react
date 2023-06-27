import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

function Navigationbar() {

  return (
      
      <Navbar expand="lg" className="bg-body-tertiary" fixed="top" bg="dark" data-bs-theme="dark" >
        <Container className="container-fluid">
          <Navbar.Brand  className="navbar-brand fw-bold fs-4" href="#home">U-MartZz</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto mb-2 mb-lg-0">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/products">Products</Link>
              <Link className="nav-link" to="/contact">Contacts</Link>
              <Link className="nav-link" to="/signup">SignUp</Link>
              <Link className="ms-4 btn btn-dark" to="/login">Login</Link>
              <form className="d-flex ms-5" role="search">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

export default Navigationbar;

