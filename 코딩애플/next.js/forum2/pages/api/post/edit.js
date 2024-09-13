import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
    if (요청.method == "POST") {
        if (요청.body.title.trim() == "") {
            return 응답.status(200).json("제목을 비우지 마세요");
        }
        const db = (await connectDB).db("forum2");

        await db.collection("post").updateOne(
            { _id: new ObjectId(요청.body._id) },
            {
                $set: {
                    title: `${요청.body.title}`,
                    content: `${요청.body.content}`,
                },
            }
        );
        return 응답.status(200).redirect("/list");
    }
}
