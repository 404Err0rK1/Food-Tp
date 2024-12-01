import { UserInfo } from "@/models/UserInfo";
import { authOptions } from "@/app/utils/authOptions";
import NextAuth, { getServerSession } from "next-auth";

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

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }