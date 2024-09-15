import { getServerSession } from 'next-auth';
import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import { authOptions } from './auth/[...nextauth]';

export default async function handler(요청, 응답) {
    const session = await getServerSession(요청, 응답, authOptions);
    const db = (await connectDB).db('forum2');
    // const postResult = await db
    //     .collection('post')
    //     .findOne({ _id: new ObjectId(요청.query.id) });

    const likeResult = await db
        .collection('likes')
        .findOne({ post: 요청.query.id });

    let likes = { post: 요청.query.id, user: session.user.email };

    if (likeResult && session.user.email == likeResult.user) {
        return 응답.status(405).json('이미 좋아요 한 상태임.');
    } else {
        await db
            .collection('post')
            .updateOne(
                { _id: new ObjectId(요청.query.id) },
                { $inc: { like: 1 } },
            );
        await db.collection('likes').insertOne(likes);
        const updatedPost = await db
            .collection('post')
            .findOne({ _id: new ObjectId(요청.query.id) });
        return 응답.status(200).json(updatedPost);
    }
}
