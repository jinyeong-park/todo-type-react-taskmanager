// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import { NextApiRequest, NextApiResponse } from "next"

// export default (req: NextApiRequest, res: NextApiResponse) => {
//   res.status(200).json({ name: 'John Doe' })
// }


import { ApolloServer, gql } from 'apollo-server-micro'
// schema
const typeDefs = gql`
  type Query {
    users: [User!]!
  }
  type User {
    name: String
  }
`
// resolvers object
const resolvers = {
  Query: {
    users(parent, args, context) {
      return [{ name: 'Nextjs' }]
    },
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}
// create createHandler function: take (req, res) => { // handle request and respond. res.json(...)}
export default apolloServer.createHandler({ path: '/api/graphql' })