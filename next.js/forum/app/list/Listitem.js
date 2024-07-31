"use client";
import Link from "next/link";
import DetailLink from "./DetailLink";
import { useEffect } from "react";

export default function ListItem({ result }) {
    return (
        <>
            <div className="list-bg">
                {result.map((a, i) => {
                    return (
                        <>
                            <div className="list-item" key={i}>
                                <Link
                                    prefetch={false}
                                    href={`/detail/${a._id}`}
                                >
                                    <p>{a.title}</p>
                                </Link>
                                <Link href={`/edit/${a._id}`}>수정</Link>
                                <DetailLink></DetailLink>
                                <span
                                    onClick={() => {
                                        fetch("/api/test", {
                                            method: "DELETE",
                                        }).then(() => {});
                                    }}
                                >
                                    삭제
                                </span>
                                <p>{a.content}</p>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
}
