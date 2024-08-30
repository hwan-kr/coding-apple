import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Write() {
    let session = await getServerSession(authOptions);
    return (
        <>
            {session ? (
                <div className="p-20">
                    <h4>글 작성</h4>
                    <form action="/api/post/new" method="POST">
                        <input name="title" placeholder="글 제목" />
                        <input name="content" placeholder="글 내용" />
                        <button type="submit">버튼</button>
                    </form>
                </div>
            ) : (
                <p>로그인을 하세요</p>
            )}
        </>
    );
}
