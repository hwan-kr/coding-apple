export default function Write() {
    return (
        <>
            <div>
                <h4>글 작성</h4>
                <form action="/api/write" method="POST">
                    제목
                    <input name="title" />
                    내용
                    <input name="content" />
                    <button type="submit">버튼</button>
                </form>
            </div>
        </>
    );
}
