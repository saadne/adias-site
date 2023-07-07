import React from "react";
import "./home.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../../assets/images/adias-digitalisation.jpeg";

import Card from "../../components/card/Card";
import { data } from "../../components/card/data";
import Slide from "../../components/slide/Slide";

function Home() {
  return (
    <div className="main">
      <div className="main__section1">
        <Row>
          <Col sm={12} xs={12} md={12} xl={6} className="main__section1__col1">
            <img src={Logo} className="main__section1__col1__image" />
          </Col>
          <Col sm={12} xs={12} md={12} xl={6} className="main__section1__col2">
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
      </div>
      <div className="main__section2">
        <h1>Nos services de digitalization</h1>
        <p>
          Depuis plus de trente ans nous accompagnons nos clients à travers une
          démarche qui se décline autour de trois axes :
        </p>
        <Row>
          {data.map((card) => (
            <Col key={card.id} xs={12} sm={12} md={6} lg={4}>
              <Card
                icon={card.icon}
                title={card.title}
                text={card.text}
                buttonText={card.buttonText}
              />
            </Col>
          ))}
        </Row>
      </div>
      <div className="main__section2">
        <h1>Il nous font confiance</h1>
        <p>
          De nombreuses organisations publiques et privées nous ont accordé leur
          confiance. Nous sommes heureux de les accompagner dans leurs projets
          de transformation digitale.
        </p>
        <Slide />
      </div>
    </div>
  );
}

export default Home;
