"use client";

import { useState } from "react";

export default function Comment({ parent }) {
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
                        fetch("/api/comment", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                comment: comment,
                                parent: parent,
                            }),
                        });
                    }}
                >
                    댓글 쓰기
                </button>
            </div>
        </>
    );
}
