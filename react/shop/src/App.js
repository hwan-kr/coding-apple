/* eslint-disable */

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import "./App.css";
import data from "./data.js";
import Detail from "./detail.js";
import { Routes, Route, Link } from "react-router-dom";

function App() {
    let [shoes] = useState(data);
    return (
        <div className="App">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Shoeshop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Link className="link" to="/">
                홈
            </Link>
            <Link className="link" to="/detail">
                상세페이지
            </Link>

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <div className="main-bg"></div>
                            <Container>
                                <Row>
                                    <ItemBox shoes={shoes}></ItemBox>
                                </Row>
                            </Container>
                        </>
                    }
                />
                <Route
                    path="/detail"
                    element={
                        <div>
                            <Detail></Detail>
                        </div>
                    }
                />
            </Routes>

            {/* <div className="container"></div> */}
        </div>
    );
}

function ItemBox(props) {
    let [shoesImg, setShoesImg] = useState([
        "https://codingapple1.github.io/shop/shoes1.jpg",
        "https://codingapple1.github.io/shop/shoes2.jpg",
        "https://codingapple1.github.io/shop/shoes3.jpg",
    ]);
    return props.shoes.map(function (a, i) {
        return (
            <Col md={4}>
                <img src={shoesImg[i]} width="80%"></img>
                <h4>{props.shoes[i].title}</h4>
                <p>{props.shoes[i].content}</p>
                <p>{props.shoes[i].price}원</p>
            </Col>
            // <div className="col-md-4">
            // </div>
        );
    });
}
export default App;
