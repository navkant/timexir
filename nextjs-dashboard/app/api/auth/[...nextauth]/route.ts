import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GAUTH_CLIENT_ID ?? "",
      clientSecret: process.env.GAUTH_CLIENT_SECRET ?? "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (!profile?.email) {
        throw new Error("No profile");
      }

      const user = await sql`SELECT * FROM users where email=${profile.email}`;
      if (!user[0]) {
        console.log(`user doesnt exists, create now`);
        const newUser =
          // @ts-ignore
          await sql`INSERT INTO users (name, email, password) VALUES
        (${profile.name}, ${profile.email}, ${"11111112121212121"})`;
      }
      console.log("user already exists..");
      return true;
    },
    async redirect({ url, baseUrl }) {
      return `${baseUrl}/timexir`;
    },
    async session({ session, token }) {
      console.log("Session:", session);
      return session;
    },
  },
});

export { handler as GET, handler as POST };
