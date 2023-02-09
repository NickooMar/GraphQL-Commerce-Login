import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import http from "http";

export async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });
  const httpServer = http.createServer(app);
  const PORT = 4000 || process.env.PORT;

  await server.start();

  app.use(
    "/graphql",
    cors({ origin: "*" }),
    express.json(),
    expressMiddleware(server)
  );

  await new Promise((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  ).then(() => console.log(`Server runnign on PORT: ${PORT}`));
}
