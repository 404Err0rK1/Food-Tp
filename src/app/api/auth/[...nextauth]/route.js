import {authOptions,isAdmin} from "@/app/utils/auth"
import NextAuth, { getServerSession } from "next-auth";


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }