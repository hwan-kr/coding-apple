import { connectDB } from "@/util/database";
import ListItem from "./Listitem";

export const dynamic = "force-dynamic";

export default async function List() {
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").find().toArray();

    return (
        <>
            <ListItem result={result}></ListItem>
        </>
    );
}
