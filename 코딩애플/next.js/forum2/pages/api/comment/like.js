import { getServerSession } from 'next-auth';
import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(요청, 응답) {
    let session = await getServerSession(요청, 응답, authOptions);
    const parentId = new ObjectId(요청.body.parent);
    console.log(parentId);
}
