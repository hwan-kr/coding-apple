'use client';

import { useEffect, useState } from 'react';

export default function Comment({ parent }) {
    let parentId = JSON.parse(parent);
    let [comment, setComment] = useState('');
    let [data, setData] = useState([]);

    useEffect(() => {
        fetch(`/api/comment/list?id=${parentId}`)
            .then((r) => r.json())
            .then((result) => {
                setData(result);
            });
    }, []);

    return (
        <>
            <div>
                <div>
                    {data.length > 0
                        ? data.map((a, i) => {
                              return (
                                  <>
                                      <div key={i}>
                                          <p>Author1 : {a.author}</p>
                                          <p>Comment : {a.comment}</p>
                                      </div>
                                  </>
                              );
                          })
                        : '댓글 없음'}
                </div>
                <input
                    onChange={(e) => {
                        setComment(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        fetch('/api/comment/new', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                comment: comment,
                                parent: parentId,
                            }),
                        })
                            .then((r) => {
                                return r.json();
                            })
                            .then((result) => {
                                let newList = JSON.parse(result);
                                setData(newList);
                            });
                    }}
                >
                    댓글 쓰기
                </button>
            </div>
        </>
    );
}
