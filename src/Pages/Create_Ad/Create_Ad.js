import React, { useState } from "react";
import { Container, Form, Spinner, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../Actions/productAction";

const Create_Ad = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [productImage, setProductImage] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      title,
      price,
      location,
      category,
      description,
      productImage,
    };
    dispatch(createProduct(data));
  };
  return (
    <>
      <Container>
        <div className="" style={{ marginTop: "150px", position: "relative" }}>
          <div className="d-flex justify-content-center">
            {product.loading && (
              <Spinner animation="border" variant="success" />
            )}
            {product.message && (
              <Alert
                variant="success"
                dismissible
              >
                {product.message}
              </Alert>
            )}
            {product.error && (
              <Alert variant="danger" dismissible>
                {product.error}
              </Alert>
            )}
          </div>
          <Form onSubmit={(e) => submitHandler(e)}>
            <div className="d-sm-flex justify-content-between mb-3">
              <Form.Group controlId="formBasicEmail" style={{ width: "45%" }}>
                <Form.Label>Product Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter product title"
                  value={title}
                  required
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-100"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail" style={{ width: "45%" }}>
                <Form.Label>price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="price"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className="d-sm-flex justify-content-between mb-3">
              <Form.Group
                controlId="formBasicPassword"
                style={{ width: "45%" }}
              >
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="city"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                controlId="formBasicPassword"
                style={{ width: "45%" }}
              >
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as="select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>Choose...</option>
                  <option value="automobiles">Automobiles</option>
                  <option value="Sports">Sports</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Real Estate">Real Estate</option>
                </Form.Control>
              </Form.Group>
            </div>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={8}
                placeholder="description"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.File
                id="exampleFormControlFile1"
                label="Upload Pictures"
                multiple
                onChange={(e) => setProductImage(e.target.files)}
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Create_Ad;
