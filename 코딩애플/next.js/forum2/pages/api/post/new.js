import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
    let session = await getServerSession(요청, 응답, authOptions);
    if (session) {
        요청.body.author = session.user.email;
    }

    if (요청.method == "POST") {
        if (요청.body.title.trim() == "") {
            return 응답.status(200).json("제목을 비우지 마세요");
        }
        const db = (await connectDB).db("forum2");
        let result = await db.collection("post").insertOne(요청.body);
        return 응답.status(200).redirect("/list");
    }
}
