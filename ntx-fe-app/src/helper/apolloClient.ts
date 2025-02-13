import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_HOST_GRAPHQL_API ?? "",
  headers: {
    "Content-Type": "application/json",
    "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET ?? "",
  },
  cache: new InMemoryCache({
    
  }),
});

export default client;
