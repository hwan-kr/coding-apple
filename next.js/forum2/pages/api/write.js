import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {
    const db = (await connectDB).db("forum2");
    let result = 요청.body;
    console.log(result);
    if (요청.method == "POST") {
        db.collection("post").insertOne(result);
        응답.status(200).json("처리 완료");
    }
}
