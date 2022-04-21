const { gql } = require('apollo-server');

const schema = gql `
type Recette {
    id: ID!
    name: String!
    ingredients: [Ingredient]
}

type Ingredient {
    id: ID!
    label: String!
    recettes: [Recette]
}

type Query {
    
    "Liste des recettes"
    recettes: [Recette]

    "Une recette par son id"
    recette(id: ID!): Recette

    "Liste des ingredients"
    ingredients: [Ingredient]

}
`

module.exports=schema;