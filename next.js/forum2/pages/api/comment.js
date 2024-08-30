import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(요청, 응답) {
    let session = await getServerSession(요청, 응답, authOptions);
    console.log(session);
    const db = (await connectDB).db("forum2");

    if (요청.method == "POST") {
        if (요청.body.title.trim() == "") {
            return 응답.status(200).json("제목을 비우지 마세요");
        }
        let result = await db.collection("post").insertOne(요청.body);
        return 응답.status(200).redirect("/list");
    }
}
