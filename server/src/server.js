import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import cors from "cors";
import http from "http";
// import session from "express-session";
import cookieParser from "cookie-parser";


export async function startApolloServer(typeDefs, resolvers) {
  const app = express();

  const httpServer = http.createServer(app);
  const PORT = 4000 || process.env.PORT;

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})]
  });

  await server.start();

  app.use(
    "/graphql",
    cors({
      origin: ["http://localhost:5173", "https://studio.apollographql.com"],
      credentials: true,
    }),
    // session({
    //   secret: "123",
    //   resave: false,
    //   saveUninitialized: false,
    //   cookie: {
    //     maxAge: 1000 * 60 * 60 * 24,
    //     httpOnly: true,
    //     secure: true,
    //     sameSite: "none",
    //   },
    // }),
    cookieParser(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req, res }) => {
        return { req, res };
      },
    })
  );

  await new Promise((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  ).then(() => console.log(`Server running on PORT: ${PORT}`));
}
