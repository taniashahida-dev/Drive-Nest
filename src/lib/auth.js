import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("drive-nest");
export const auth = betterAuth({
  //...

  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google"],
    },
  },


 secret: process.env.BETTER_AUTH_SECRET,
  session: {
    cookieCache:{
      enabled: true,
      strategy : 'jwt',
      maxAge: 7*24*60*60 //in second
    }
  }
  ,
   plugins: [
        jwt(), 
    ]
});
