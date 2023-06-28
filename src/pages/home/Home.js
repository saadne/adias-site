import React from "react";
import "./home.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../../assets/images/adias-digitalisation.jpeg";

function Home() {
  return (
    <div>
      <div className="section1">
        <Container fluid="md">
          <Row>
            <Col sm={12} xs={12} md={12} xl={6} className="section1__col1">
              <img src={Logo} className="section1__col1__image" />
            </Col>
            <Col sm={12} xs={12} md={12} xl={6} className="section1__col2">
              <h1>Partner in Business Transformation</h1>
              <p>
                As an expert in digital transformation, ADIAS supports private
                companies and public organizations in Africa and Europe. Our
                mission: to offer innovative services and solutions tailored to
                the strategic challenges of our clients.
              </p>
              <button>Learn More About Adias</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
