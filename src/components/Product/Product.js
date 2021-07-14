import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button, Navbar, Nav, DropdownButton, Dropdown, Spinner} from "react-bootstrap";
import Cards from "../Cards/Cards";
import { FaFutbol } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { IoBusinessSharp } from "react-icons/io5";
import { IoShirtSharp } from "react-icons/io5";
import { MdDvr } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../Actions/productAction";

const Product = () => {
  const dispatch = useDispatch();
  const savedProduct = useSelector((state) => state.product);
  const [product, setProduct] = useState([]);


  const displayCategory = (category) => {
    const filteredProduct = savedProduct.product.filter(
      (each) => each.category.category.toLowerCase() === category.toLowerCase()
    );
    setProduct(filteredProduct);
  };

  const displayAll = () => {
    setProduct(savedProduct.product);
  }

  const filterByPriceAscending = () => {
    const toFilter = [...savedProduct.product]
    const filteredProduct = toFilter.sort((a,b)=> {
      return a.price - b.price;
    })
    setProduct(filteredProduct);
  }

  const filterByPriceDescending = () => {
    const toFilter = [...savedProduct.product]
    const filteredProduct = toFilter.sort((a,b)=> {
      return b.price - a.price;
    })
    setProduct(filteredProduct);
  }
useEffect(()=>{
  setProduct(savedProduct.product);
},[savedProduct])

  
  return (
    <>
      <Card className="mt-4">
        <Card.Header>Categories</Card.Header>
        <Card.Body>
          <Navbar
            style={{ backgroundColor: "white" }}
            variant="light"
            expand="md"
            className="my-0"
          >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className=" w-100 d-flex justify-content-between align-items-center text-center">
                <Button variant="light" onClick={() => displayAll()}>
                  All <BsFillGrid3X3GapFill />
                </Button>
                <Button
                  variant="light"
                  onClick={() => displayCategory("Automobiles")}
                >
                  Automobiles <FaCarSide color="red" />
                </Button>
                <Button variant="light" onClick={() => displayCategory("Sports")}>
                  Sports <FaFutbol />
                </Button>
                <Button variant="light" onClick={() => displayCategory("Electronics")}>
                  Electronics <MdDvr color="blue" />
                </Button>
                <Button variant="light" onClick={() => displayCategory("Fashion")}>
                  Fashion <IoShirtSharp color="pink" />
                </Button>
                <Button variant="light" onClick={() => displayCategory("Real Estate")}>
                  Real Estate <IoBusinessSharp />
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Header className="d-flex justify-content-between bg-white">
          <p>All Ads</p> 
          <div>

          <span>Filter by:</span><DropdownButton id="dropdown-basic-button" title='Filter Results' className='form-inline'>
  <Dropdown.Item ><Button variant='white' onClick={()=>filterByPriceAscending()}>Price:Low to High</Button></Dropdown.Item>
  <Dropdown.Item ><Button variant='white' onClick={()=>filterByPriceDescending()}>Price: high to Low</Button></Dropdown.Item>
</DropdownButton>
          </div>
        </Card.Header>
        <Card.Body className="bg-light">
          <Row>
          <div className='d-flex justify-content-center'>
          {product.length === 0 && <Spinner animation="border" variant="success" />}
          </div>
            {product.length > 0 &&
              product.map((each, index) => {
                return (
                  <Col md key={index} className="col-md-6 col-lg-4">
                    <Cards
                      title={each.title}
                      description={each.description}
                      location={each.location}
                      productImage={each.productImage[0]}
                      category={each.category.category}
                      price={each.price}
                    />
                  </Col>
                );
              })}
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
