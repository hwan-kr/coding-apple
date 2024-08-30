"use client";

import { useState } from "react";

export default function Comment() {
    let [comment, setComment] = useState("");

    return (
        <>
            <div>
                <div>댓글 목록 보여줄 부분</div>
                <input
                    onChange={(e) => {
                        setComment(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        console.log(comment);
                        fetch("/api/comment", {
                            method: "POST",
                            body: comment,
                        });
                    }}
                >
                    댓글 쓰기
                </button>
            </div>
        </>
    );
}
