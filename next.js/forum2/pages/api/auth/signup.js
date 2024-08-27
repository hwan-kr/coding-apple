import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(요청, 응답) {
    if (요청.method == "POST") {
        const { name, email, password } = 요청.body;
        if (!name.trim() || !email.trim() || !password.trim()) {
            응답.status(500).json("빈칸 없게 하셈");
        } else {
            let hash = await bcrypt.hash(요청.body.password, 10);
            let db = (await connectDB).db("forum2");
            요청.body.password = hash;
            await db
                .collection("user_cred")
                .insertOne({ ...요청.body, password: hash });
            응답.status(200).json("가입 성공");
        }
    }
}
