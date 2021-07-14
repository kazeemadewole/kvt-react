import React from "react";
import { Container } from "react-bootstrap";
import Product from "../../components/Product/Product";

const Home = () => {
  return (
    <>
    <div className='bg-light'>
      <div style={{marginTop:'70px'}}>
      <Container>
        <Product />
      </Container>

      </div>
    </div>
    </>
  );
};

export default Home;
