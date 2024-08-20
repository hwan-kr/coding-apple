import { connectDB } from "@/util/database";
import DetailLink from "./DetailLink";
import Link from "next/link";

export default async function List() {
    const db = (await connectDB).db("forum2");
    let result = await db.collection("post").find().toArray();

    return (
        <div className="list-bg">
            {result.map((a, i) => {
                return (
                    <>
                        <div className="list-item" key={i}>
                            <Link prefetch={false} href={`/detail/${a._id}`}>
                                <h4>{a.title}</h4>
                            </Link>
                            <Link href={`/edit/${a._id}`}>✏️</Link>
                            <p>{a.content}</p>
                        </div>
                    </>
                );
            })}
        </div>
    );
}
