import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Container,
  Button,
} from "react-bootstrap";
import "./header.module.css";

import { NavLink, useHistory } from "react-router-dom";
import Login from "../Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { logout, showModal, showSignupModal } from "../../Actions/LoginActions";
import SignUp from "../SignUp/SignUp";

const Header = () => {
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const showHandler = () => {
    dispatch(showModal());
  };
  const showSignUpHandler = () => {
    dispatch(showSignupModal());
  };
  const logOut = () => {
    dispatch(logout());
    history.push("/");
  };
  const loggedOutLinks = () => (
    <>
      <NavLink to="#" className="nav-link text-light">
        Profile
      </NavLink>
      <Button
        onClick={logOut}
        className="nav-link text-white"
        variant="transparent"
      >
        Sign Out
      </Button>
    </>
  );

  const loggedInLinks = () => (
    <>
      <Button
        onClick={showHandler}
        className="nav-link text-white"
        variant="transparent"
      >
        Sign In
      </Button>
      <Button
        onClick={showSignUpHandler}
        className="nav-link text-white"
        variant="transparent"
      >
        Sign Up
      </Button>
    </>
  );
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" className="fixed-top">
        <Container>
          <NavLink to='/' className='navbar-brand'>KVT</NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto d-flex justify-content-between align-items-center nav-mobile-view">
            
              <NavLink to="/favourites" className="nav-link text-light">
                Favourite
              </NavLink>

              <Form inline className="ml-5">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
              </Form>
            </Nav>
            <Nav className="ml-auto ">
              <NavLink
                to="/sell"
                className="nav-link text-light bg-danger px-5 rounded mr-5 text-center"
              >
                Sell
              </NavLink>
            </Nav>
            <Nav className=" mr-10 d-flex justify-content-between align-items-center">
              {auth.authenticated ? loggedOutLinks() : loggedInLinks()}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Login show={auth.show} />
      <SignUp show={auth.showSignUp} />
    </>
  );
};

export default Header;
