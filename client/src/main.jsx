import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import dotenv from "dotenv";

dotenv.config();


const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("refreshToken");
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    },
  };
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  credentials: "include",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </ApolloProvider>
  </AuthProvider>
);
