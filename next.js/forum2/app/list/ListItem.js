"use client";
import Link from "next/link";

export default function ListItem({ result }) {
    return (
        <>
            {result.map((a, i) => {
                return (
                    <>
                        <div className="list-item" key={i}>
                            <Link prefetch={false} href={`/detail/${a._id}`}>
                                <h4>{a.title}</h4>
                            </Link>
                            <Link href={`/edit/${a._id}`}>✏️</Link>
                            <span
                                onClick={() => {
                                    fetch("/api/post/delete", {
                                        method: "DELETE",
                                        body: a._id,
                                    }).then(() => {
                                        console.log(123);
                                    });
                                }}
                            >
                                🗑️
                            </span>
                            <p>{a.content}</p>
                        </div>
                    </>
                );
            })}
        </>
    );
}
