/* eslint-disable */

import { createContext, useEffect, useState, lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Button,
    Navbar,
    Container,
    Nav,
    Col,
    Row,
    Card,
    ListGroup,
} from "react-bootstrap";
import "./App.css";
import data from "./data.js";
const Detail = lazy(() => import("./routes/detail.js"));
const Cart = lazy(() => import("./routes/cart.js"));
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";

export let Context1 = createContext();

function App() {
    useEffect(() => {
        // 로컬스토리지에 'watched' 키가 있는지 확인
        const watched = localStorage.getItem("watched");

        // 'watched' 키가 없으면 배열을 초기화
        if (!watched) {
            localStorage.setItem("watched", JSON.stringify([]));
        }
    }, []);

    let navigate = useNavigate();
    let [shoes, setShoes] = useState(data);
    let [count, setCount] = useState(0);
    let [alert, setAlert] = useState(false);
    let [재고] = useState([10, 11, 12]);

    let result = useQuery(["작명"], () => {
        return axios
            .get("https://codingapple1.github.io/userdata.json")
            .then((a) => a.data);
    });

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
                        <Nav.Link
                            onClick={() => {
                                navigate("/cart");
                            }}
                        >
                            Cart
                        </Nav.Link>
                    </Nav>
                    <Nav className="ms-auto server">
                        {result.isLoading ? "로딩중" : result.data.name}
                    </Nav>
                </Container>
            </Navbar>
            <Suspense fallback={<div>로딩중</div>}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <div className="main-bg">
                                    <Seen></Seen>
                                </div>
                                <Container>
                                    <Row>
                                        <ItemBox
                                            shoes={shoes}
                                            재고={재고}
                                        ></ItemBox>
                                    </Row>
                                </Container>
                                <button
                                    onClick={() => {
                                        setAlert(true);
                                        if (count === 0) {
                                            axios
                                                .get(
                                                    "https://codingapple1.github.io/shop/data2.json"
                                                )
                                                .then((result) => {
                                                    let combinedArray =
                                                        shoes.concat(
                                                            result.data
                                                        );
                                                    setShoes(combinedArray);
                                                    setCount(1);
                                                    setAlert(false);
                                                })
                                                .catch(() => {
                                                    setAlert(false);
                                                    console.log("실패");
                                                });
                                        } else if (count === 1) {
                                            axios
                                                .get(
                                                    "https://codingapple1.github.io/shop/data3.json"
                                                )
                                                .then((result) => {
                                                    let combinedArray =
                                                        shoes.concat(
                                                            result.data
                                                        );
                                                    setShoes(combinedArray);
                                                    setCount(2);
                                                    setAlert(false);
                                                })
                                                .catch(() => {
                                                    console.log("실패");
                                                    setAlert(false);
                                                });
                                        } else {
                                            console.log(
                                                "더 이상 상품이 없습니다"
                                            );
                                            setAlert(false);
                                        }
                                    }}
                                >
                                    버튼
                                </button>
                                {alert === true ? <Loading></Loading> : null}
                            </>
                        }
                    />
                    <Route
                        path="/detail/:id"
                        element={<Detail shoes={shoes}></Detail>}
                    />
                    <Route />

                    <Route path="/cart" element={<Cart></Cart>} />
                </Routes>
            </Suspense>
        </div>
    );
}

function ItemBox(props) {
    let navigate = useNavigate();
    let [shoesImg, setShoesImg] = useState([
        "https://codingapple1.github.io/shop/shoes1.jpg",
        "https://codingapple1.github.io/shop/shoes2.jpg",
        "https://codingapple1.github.io/shop/shoes3.jpg",
    ]);
    return props.shoes.map(function (a, i) {
        return (
            <Col md={4} key={i}>
                <img
                    src={shoesImg[i]}
                    width="80%"
                    onClick={() => {
                        navigate(`/detail/${i}`);
                    }}
                    alt={`Shoes ${i}`}
                ></img>
                <h4>{props.shoes[i].title}</h4>
                <p>{props.shoes[i].content}</p>
                <p>{props.shoes[i].price}원</p>
            </Col>
        );
    });
}

function Loading() {
    return <p>로딩중입니다..</p>;
}

function Seen() {
    let state = useSelector((state) => state);
    let watchedArray = JSON.parse(localStorage.getItem("watched"));
    return (
        <Card style={{ width: "18rem" }} className="seen">
            <ListGroup variant="flush">
                {watchedArray.map((id, i) => {
                    let item = state.cart.find(
                        (cartItem) => cartItem.id === id
                    );
                    if (item) {
                        return (
                            <ListGroup.Item key={i}>{item.name}</ListGroup.Item>
                        );
                    } else {
                        return null;
                    }
                })}
            </ListGroup>
        </Card>
    );
}

export default App;
