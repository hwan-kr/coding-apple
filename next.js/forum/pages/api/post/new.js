import { connectDB } from "@/util/database";

export default async function handler(req, res) {
    if (req.method == "POST") {
        if (req.body.title == "") {
            return res.status(500).json("제목이 비어있습니다");
        }

        const db = (await connectDB).db("forum");
        let result = await db.collection("post").insertOne(req.body);
        return res.redirect(302, "/list");
    }
}
