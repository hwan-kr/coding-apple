import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: "Ov23liPXHjGM3LJeSeov",
            clientSecret: "27fec7ddca8144f91d29166600bec23d575c7d44",
        }),
    ],
    secret: "qwer1234",
    adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
