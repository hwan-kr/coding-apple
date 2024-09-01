import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {
    let session = await getServerSession(요청, 응답, authOptions);
    console.log(session);
    console.log(요청.body);
    const db = (await connectDB).db("forum2");
    if (요청.method == "POST") {
        if (요청.body.trim() == "") {
            return 응답.status(200).json("댓글이 비어있습니다.");
        }
        요청.body = { parent: session.user.email, comment: 요청.body };
        console.log(요청.body);
        let result = await db.collection("comment").insertOne(요청.body);
        return 응답.status(500).json("작성 완료");
    }
}
