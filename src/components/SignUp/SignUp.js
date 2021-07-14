import React, {useState} from 'react';
import {Modal, Form, Button, Spinner, Alert} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clearMessage, closeSignupModal, signUp } from '../../Actions/LoginActions';

const SignUp = (props) => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');

    const handleClose = () => dispatch(closeSignupModal());

    // const clearmessage = () => {
    //     dispatch(clearMessage());
    // }

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {firstName,lastName,email,phone,location,password};
        dispatch(signUp(data));
    }

    return (
        <>
        <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>Sign Up</Modal.Title>
         {auth.message && <Alert  variant='success' onClose={() =>  dispatch(clearMessage())} dismissible>{auth.message}</Alert>}
         {auth.error && <Alert  variant='danger' dismissible>{auth.error}</Alert>}
        </Modal.Header>
        <Modal.Body>
        <div className="d-flex justify-content-center">
            {auth.loading && <Spinner animation="border" variant="success" />}
          </div>
          <Form onSubmit={(e)=>submitHandler(e)}>
          <Form.Group controlId="formBasicFirstName">
              <Form.Control
                type="text"
                placeholder="Enter FirstName"
                value={firstName}
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicLastName">
              <Form.Control
                type="text"
                placeholder="Enter LastName"
                value={lastName}
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPhone">
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                value={phone}
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicLocation">
              <Form.Control
                type="text"
                placeholder="Enter Location"
                value={location}
                required
                onChange={(e) => setLocation(e.target.value)}
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
            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit">
                SignUp
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      </>
    )
}

export default SignUp
