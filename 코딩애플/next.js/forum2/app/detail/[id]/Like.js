'use client';

export default function Like({ parent }) {
    let parentId = JSON.parse(parent);

    return (
        <>
            <div>
                <button
                    onClick={() => {
                        fetch('/api/comment/like', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                parent: parentId,
                            }),
                        });
                        console.log(parentId);
                    }}
                >
                    좋아요111
                </button>
                <span> 개수</span>
            </div>
        </>
    );
}
