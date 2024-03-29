import { startApolloServer } from "./server.js";
import { resolvers } from "./graphql/resolvers.js";
import { typeDefs } from "./graphql/typeDefs.js";
import { connectDB } from "./db.js";

connectDB();
startApolloServer(typeDefs, resolvers);
