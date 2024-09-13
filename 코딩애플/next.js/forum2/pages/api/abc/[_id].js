import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
    console.log(요청.query);
    if (요청.method == "GET") {
        const db = (await connectDB).db("forum2");
        await db
            .collection("post")
            .deleteOne({ _id: new ObjectId(요청.query._id) });
        return 응답.status(200).json();
    }
}
