import { getServerSession } from 'next-auth';
import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(요청, 응답) {
    let session = await getServerSession(요청, 응답, authOptions);
    const { comment, parent } = 요청.body;
    const db = (await connectDB).db('forum2');

    if (요청.method == 'POST') {
        if (comment.trim() == '') {
            return 응답.status(400).json('댓글이 비어있습니다.');
        }
        요청.body = {
            parent: new ObjectId(parent),
            author: session.user.email,
            comment: comment,
        };
        await db.collection('comment').insertOne(요청.body);
        const result = await db.collection('comment').find().toArray();
        return 응답.status(200).json(JSON.stringify(result));
    }
}
