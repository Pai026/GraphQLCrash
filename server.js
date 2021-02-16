const express = require('express')
const { graphqlHTTP } = require("express-graphql");
const expressGraphQL = require('express-graphql').graphqlHTTP
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql')

const app = express()

const schema = new GraphQLSchema({
    query : new GraphQLObjectType({
        name:"helloworld",
        fields: () => ({
            message: {
                type: GraphQLString,
                resolve: () => 'hello world'
            }
        })
    })
})

app.use('/graphql', expressGraphQL({
        schema: schema,
        graphiql: true
    })
)
app.listen(5000,()=>console.log('server runner'))