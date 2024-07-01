/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
    let [title, setTitle] = useState([
        "남자 코트 추천",
        "강남 우동 맛집",
        "파이썬 독학",
    ]);
    let [date, setDate] = useState([
        "6월 28일 발행",
        "6월 29일 발행",
        "6월 30일 발행",
    ]);
    let [like, setLike] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);
    let [index, setIndex] = useState(0);
    let [inputValue, setInputValue] = useState("");
    return (
        <div className="App">
            <div className="black-nav">
                <h4>ReactBlog</h4>
            </div>

            {title.map(function (a, i) {
                return (
                    <div className="list" key={i}>
                        <h4
                            onClick={() => {
                                setIndex(i);
                                setModal(!modal);
                            }}
                        >
                            {title[i]}
                            <span
                                onClick={(e) => {
                                    e.stopPropagation();
                                    let newLike = [...like];
                                    newLike[i] += 1;
                                    setLike(newLike);
                                }}
                            >
                                👍
                            </span>{" "}
                            {like[i]}
                        </h4>
                        <p>{date[i]}</p>
                        <button
                            onClick={() => {
                                let copyTitle = [...title];
                                copyTitle.splice(i, 1);
                                setTitle(copyTitle);
                                let copyLike = [...like];
                                copyLike.splice(i, 1);
                                setLike(copyLike);
                                let copyDate = [...date];
                                copyDate.splice(i, 1);
                                setDate(copyDate);
                            }}
                        >
                            삭제
                        </button>
                    </div>
                );
            })}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (inputValue.trim() === "") {
                        return;
                    } else {
                        console.log("Submitted value:", inputValue);
                        setInputValue(""); // input 값을 제출 후 비웁니다.
                    }
                    let copyTitle = [...title];
                    copyTitle.unshift(inputValue);
                    setTitle(copyTitle);
                    let copyLike = [...like];
                    copyLike.unshift(0);
                    setLike(copyLike);
                    let copyDate = [...date];
                    let date1 = new Date();
                    copyDate.unshift(date1.toString());
                    setDate(copyDate);
                    setInputValue("");
                }}
            >
                <input
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                ></input>
                <button type="submit" onClick={(e) => {}}>
                    글발행
                </button>
            </form>

            {modal == true ? <Modal index={index} title={title} /> : null}
        </div>
    );
}

function Modal(props) {
    return (
        <div className="modal">
            <h4>{props.title[props.index]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button>글수정</button>
        </div>
    );
}

export default App;
