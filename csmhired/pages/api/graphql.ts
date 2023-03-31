import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

// Define GraphQL schema
const typeDefs = `#graphql
    interface Job {
        id: ID,
        company: Company,
        description: String,
        salary: Int,
        currency: String,
        location: String,
        remote: String,
        datePosted: String,
        status: String,
    }

    interface Company {
        id: ID,
        name: String,
        location: String,
        city: String,
        country: String,
    }

    type CompanyProfile implements Company {
        employees: Int,
        rating: Float,
        currentlyHiring: Boolean,
        jobs: [Job]
    }

    interface User {
        id: ID,
        userName: String,
        picture: ID,
    }

    type UserAccount implements User {
        firstName: String,
        lastName: String,
        email: String,
        DOB: {
            Year: Int,
            Month: Int,
            Day: Int,
        },
    }

    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each.

    type Query {
        jobs: [Job],
        job(id: ID): Job,
        users: [User],
        user(id: ID): [UserAccount],
        companies: [Company],
        company(id: ID): [CompanyProfile]
    }
`;

const jobs: any[] = []; // TODO - get data from DB
const users: any[] = []; // TODO - get data from DB
const companies: any[] = []; // TODO - get data from DB

// Define resolvers
// Resolvers define how to fetch the types defined in your schema.

const resolvers = {
  Query: {
    jobs: () => jobs,
    job(parent, args, contextValue, info) {
      return jobs.find((job) => job.id === args.id);
    },
    users: () => users,
    user(parents, args, contextValue, info) {
      return users.find((user) => user.id === args.id);
    },
    companies: () => companies,
    company(parents, args, contextValue, info) {
      return companies.find((company) => company.id === args.id);
    },
  },
};

// APOLLO SERVER
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateNextHandler(server);
