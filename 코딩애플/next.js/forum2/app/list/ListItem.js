'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ListItem({ result }) {
    const router = useRouter();
    return (
        <>
            {result.map((a, i) => {
                return (
                    <>
                        <div className="list-item" key={i}>
                            <Link prefetch={false} href={`/detail/${a._id}`}>
                                <h4>{a.title}</h4>
                                <h3>좋아요 : {a.like}</h3>
                            </Link>
                            <Link href={`/edit/${a._id}`}>✏️</Link>
                            <span
                                onClick={(e) => {
                                    fetch('/api/post/delete', {
                                        method: 'DELETE',
                                        body: a._id,
                                    })
                                        .then((r) => {
                                            return r.json();
                                        })
                                        .then(() => {
                                            e.target.parentElement.style.opacity = 0;
                                            setTimeout(() => {
                                                e.target.parentElement.style.display =
                                                    'none';
                                            }, 1000);
                                        });
                                }}
                            >
                                🗑️
                            </span>
                            <span
                                onClick={() => {
                                    fetch(`/api/like?id=${a._id}`)
                                        .then((r) => {
                                            return r.json();
                                        })
                                        .then(() => {
                                            router.refresh();
                                        });
                                }}
                            >
                                ❤️
                            </span>
                            <p>{a.content}</p>
                        </div>
                    </>
                );
            })}
        </>
    );
}
