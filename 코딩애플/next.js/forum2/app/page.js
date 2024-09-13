import { connectDB } from "@/util/database";

export const revalidate = 60;

export default async function Home() {
    const db = (await connectDB).db("forum2");
    let result = await db.collection("post").find().toArray();
    console.log(result);

    return (
        <>
            <div>안녕</div>
        </>
    );
}
