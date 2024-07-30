import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    const db = (await connectDB).db("forum");
    await db
        .collection("post")
        .updateOne(
            { _id: new ObjectId(props.params.id) },
            { $set: { title: req.body.title, content: req.body.content } }
        );
}
