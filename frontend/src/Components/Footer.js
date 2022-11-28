import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../index.css";

const Footer = () => {
  return (
    <footer >
      <Container>
        <Row>
          <Col  className="py-3 text-center" >
            @Carscan
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;


// style={{ textAlign: "center" }}