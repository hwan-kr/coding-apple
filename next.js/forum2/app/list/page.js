import { connectDB } from "@/util/database";

export default async function List() {
    const db = (await connectDB).db("forum2");
    let result = await db.collection("post").find().toArray();

    return (
        <div className="list-bg">
            {result.map((a, i) => {
                return (
                    <>
                        <div className="list-item" key={i}>
                            <h4>{a.title}</h4>
                            <a href={`/detail/${a._id}`}>{a.title}</a>
                            <p>{a.content}</p>
                        </div>
                    </>
                );
            })}
        </div>
    );
}
