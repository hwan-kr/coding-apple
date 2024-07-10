import { useContext, useEffect, useState } from "react";
import "./../App.css";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import { Context1 } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { cartUpdate } from "../store.js";

let Box = styled.div`
    background: #fff2cc;
`;

function Detail(props) {
    let state = useSelector((state) => state);
    let dispatch = useDispatch();

    let { 재고 } = useContext(Context1);

    let { id } = useParams();
    let item = props.shoes.find((x) => x.id == id);
    let [alert, setAlert] = useState(true);
    let [value, setValue] = useState("");
    let [tab, setTab] = useState(0);
    let [fade1, setFade1] = useState("");

    useEffect(() => {
        let a = setTimeout(() => {
            setAlert(false);
        }, 2000);
        return () => {
            clearTimeout(a);
        };
    }, []);

    useEffect(() => {
        if (isNaN(value) == true) {
            console.log("숫자를 입력하세요");
        }
    }, [value]);

    useEffect(() => {
        let a = setTimeout(() => {
            setFade1("end");
        }, 10);
        return () => {
            clearTimeout(a);
            setFade1("");
        };
    }, []);

    return (
        <div className={`container start ${fade1}`}>
            {alert == true ? <Box>2초 후 박스 사라짐.</Box> : null}
            <div className="row">
                <div className="col-md-6">
                    <img
                        src="https://codingapple1.github.io/shop/shoes1.jpg"
                        width="100%"
                    />
                </div>
                {/* <input
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                ></input> */}
                <div className="col-md-6">
                    <h4 className="pt-5">{item.title}</h4>
                    <p>{item.content}</p>
                    <p>{item.price}</p>
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            dispatch(cartUpdate(item));
                            console.log(state.cart);
                        }}
                    >
                        주문하기
                    </button>
                </div>
            </div>
            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            setTab(0);
                        }}
                        eventKey="link0"
                    >
                        버튼0
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            setTab(1);
                        }}
                        eventKey="link1"
                    >
                        버튼1
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            setTab(2);
                        }}
                        eventKey="link2"
                    >
                        버튼2
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab} />
        </div>
    );
}

function TabContent({ tab }) {
    // if (props.tab == 0) {
    //     return <div>내용0</div>;
    // }
    // if (props.tab == 1) {
    //     return <div>내용1</div>;
    // }
    // if (props.tab == 2) {
    //     return <div>내용2</div>;
    // }
    let [fade, setFade] = useState("");
    let { 재고 } = useContext(Context1);
    useEffect(() => {
        let a = setTimeout(() => {
            setFade("end");
        }, 10);
        return () => {
            clearTimeout(a);
            setFade("");
        };
    }, [tab]);
    return (
        <div className={`start ${fade}`}>
            {" "}
            {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
        </div>
    );
}

export default Detail;
