import clientPromise from "@/libs/mongoConnect";
import { UserInfo } from "@/models/UserInfo";
import bcrypt from "bcrypt";
import * as mongoose from "mongoose";
import { User } from '@/models/User';
import NextAuth, { getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter"


export const authOptions = {
    secret: process.env.SECRET,
    adapter: MongoDBAdapter(clientPromise),
    session: {
      // Set it as jwt instead of database
      strategy: "jwt",
    },
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      CredentialsProvider({
        name: 'Credentials',
        id: 'credentials',
        credentials: {
          username: { label: "Email", type: "email", placeholder: "email@example.com" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials, req) {
          // if(credentials){
          console.log(credentials) //check credentials
          // }
          const email = credentials?.email;
          const password = credentials?.password;
  
          mongoose.connect(process.env.MONGO_URL);
          const user = await User.findOne({ email });
          
          const passwordOk = user && bcrypt.compareSync(password, user.password);
          if (passwordOk) {
            console.log(user)
            return user;
          }
  
          return null
        }
      })
    ],
  
  };
  
  export async function isAdmin() {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;
  
    if (!userEmail) {
  
      return false;
    }
    const userInfo = await UserInfo.findOne({ email: userEmail });
    if (!userInfo) {
  
      return false;
    }
    // console.log(userInfo.admin); //test value admin
  
    return userInfo.admin;
  }