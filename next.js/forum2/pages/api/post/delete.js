import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
    if (요청.method == "DELETE") {
        let session = await getServerSession(요청, 응답, authOptions);
        console.log(session);
        const db = (await connectDB).db("forum2");
        let result = await db
            .collection("post")
            .findOne({ _id: new ObjectId(요청.body) });
        if (
            result.author == session.user.email ||
            session.user.role == "admin"
        ) {
            await db
                .collection("post")
                .deleteOne({ _id: new ObjectId(요청.body) });
            return 응답.status(200).json("삭제완료");
        } else {
            return 응답.status(500).json("현재유저와 작성자 불일치");
        }
    }
}
