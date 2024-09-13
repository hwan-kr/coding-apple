import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(요청, 응답) {
    if (요청.method == "POST") {
        const { name, email, password } = 요청.body;
        let db = (await connectDB).db("forum2");
        let result = await db.collection("user_cred").find().toArray();
        if (!name.trim() || !email.trim() || !password.trim()) {
            응답.status(500).json("빈칸 없게 하셈");
        } else {
            if (result.some((value) => value.email == email.trim())) {
                응답.status(500).json("이미 존재하는 이메일 입니다.");
            } else {
                let hash = await bcrypt.hash(요청.body.password, 10);
                요청.body.password = hash;
                요청.body.role = "normal";
                await db
                    .collection("user_cred")
                    .insertOne({ ...요청.body, password: hash });
                응답.status(200).json("가입 성공");
            }
        }
    }
}
