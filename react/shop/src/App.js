/* eslint-disable */

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import "./App.css";
import data from "./data.js";
import Detail from "./routes/detail.js";
import Event from "./routes/event.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";

function App() {
    let navigate = useNavigate();
    let [shoes, setShoes] = useState(data);
    let [count, setCount] = useState(0);
    let [alert, setAlert] = useState(false);
    return (
        <div className="App">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        Shoeshop
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigate("/detail/1");
                            }}
                        >
                            Detail
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

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
                            <button
                                onClick={() => {
                                    setAlert(true);
                                    if (count == 0) {
                                        axios
                                            .get(
                                                "https://codingapple1.github.io/shop/data2.json"
                                            )
                                            .then((result) => {
                                                let combinedArray =
                                                    shoes.concat(result.data);
                                                setShoes(combinedArray);
                                                setCount(1);
                                                setAlert(false);
                                            })
                                            .catch(() => {
                                                setAlert(false);
                                                console.log("실패");
                                            });
                                    } else if (count == 1) {
                                        axios
                                            .get(
                                                "https://codingapple1.github.io/shop/data3.json"
                                            )
                                            .then((result) => {
                                                let combinedArray =
                                                    shoes.concat(result.data);
                                                setShoes(combinedArray);
                                                setCount(2);
                                                setAlert(false);
                                            })
                                            .catch(() => {
                                                console.log("실패");
                                                setAlert(false);
                                            });
                                    } else {
                                        console.log("더 이상 상품이 없습니다");
                                        setAlert(false);
                                    }
                                }}
                            >
                                버튼
                            </button>
                            {alert == true ? <Loading></Loading> : null}
                        </>
                    }
                />
                <Route
                    path="/detail/:id"
                    element={
                        <div>
                            <Detail shoes={shoes}></Detail>
                        </div>
                    }
                />
                <Route />
                <Route path="/event" element={<Event></Event>}>
                    <Route
                        path="one"
                        element={<p>첫 주문시 양배추즙 서비스</p>}
                    ></Route>
                    <Route
                        path="two"
                        element={<p>생일 기념쿠폰 받기</p>}
                    ></Route>
                </Route>
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

function Loading() {
    return <p>로딩중입니다..</p>;
}
export default App;