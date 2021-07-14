import React, { useState } from "react";
import { Modal, Button, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, login } from "../../Actions/LoginActions";

const Login = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => dispatch(closeModal());

  const submitHandler = (e) => {
    e.preventDefault();
    const data = { email, password };
    dispatch(login(data));
  };
  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center">
            {auth.loading && <Spinner animation="border" variant="success" />}
          </div>
          <Form onSubmit={(e) => submitHandler(e)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
