import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

// Define GraphQL schema
const typeDefs = `#graphql
    type Job {
        title: String,
        company: String,
        location: String,
        # TODO - Add all the possible job fields app can query
    }


    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each.
    
    type Query {
        jobs: [Job],
        helloWorld: String,
    }
`;

// Example data-set
// TODO replace this with data from db
const jobs = [
  {
    title: "job1",
    company: "company1",
    location: "location1",
  },
  {
    title: "job2",
    company: "company2",
    location: "location2",
  },
  {
    title: "job3",
    company: "company3",
    location: "location3",
  },
];

// Define resolvers
// Resolvers define how to fetch the types defined in your schema.

const resolvers = {
  Query: {
    jobs: () => jobs,
    helloWorld: () => "Hello Tyche!!",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateNextHandler(server);
