import React, { useEffect, useState } from "react";
import { Row, Col, Dropdown } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./layout.scss";
const Layout = () => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Row className={size.width > 1200 ? "up" : "noneUp"}>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col>
          <Dropdown>
            <Dropdown.Toggle
              style={{
                backgroundColor: "#f9f9f9",
                color: "black",
                outline: "none",
                border: "none",
              }}>
              Francais
            </Dropdown.Toggle>

            <Dropdown.Menu
              style={{
                backgroundColor: "#0f4876",
                color: "white",
                outline: "none",
                border: "none",
              }}>
              <Dropdown.Item
                style={{
                  backgroundColor: "#0f4876",
                  color: "white",
                  outline: "none",
                  border: "none",
                }}>
                English
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
