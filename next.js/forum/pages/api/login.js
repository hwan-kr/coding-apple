import { connectDB } from "@/util/database";

export default async function handler(req, res) {
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").find().toArray();

    try {
        if (req.method == "POST") {
            if (result.some((obj) => obj.id === req.body.id)) {
                return res.status(500).json("중복되는 아이디 입니다.");
            }
            let resultInsert = await db.collection("post").insertOne(req.body);
            res.redirect(302, "/list");
        }
    } catch (error) {
        res.status(200).json("오류");
    }
}
