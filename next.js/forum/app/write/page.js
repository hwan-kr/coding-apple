const url =
    "mongodb+srv://fabronjeon:qkqhws123!@cluster0.xlnpotz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export default function Write() {
    return (
        <>
            <div>
                <h4>글작성</h4>
                <form action="/api/test" method="POST">
                    <input name="title" />글 제목
                    <button type="submit">버튼</button>
                </form>
            </div>
        </>
    );
}
