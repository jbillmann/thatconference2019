import React from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import { RestLink } from "apollo-link-rest";
import Home from "./components/Home";

const restLink = new RestLink({
  uri: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/"
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <Home />
    </div>
  </ApolloProvider>
);

export default App;
