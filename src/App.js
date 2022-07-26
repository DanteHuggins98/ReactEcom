import "./App.css";
import Footer from "./Components/Footer";
import { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  AccordionButton,
  Carousel,
} from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Form } from "./Components/Form";
import { Products } from "./Components/Products";
import { Home } from "./Components/Home";
import Image2 from "../src/image/Dantelogo3.png";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <>
          <Navbar className="navbar" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/#home">
                <img
                  class="navimg"
                  src={Image2}
                  alt="logo"
                  width="150"
                  height="90"
                ></img>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link as={Link} to="/contact">
                    Contact
                  </Nav.Link>
                  <Nav.Link as={Link} to="/products">
                    Products
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Form />} />
            <Route path="/Products" element={<Products />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
