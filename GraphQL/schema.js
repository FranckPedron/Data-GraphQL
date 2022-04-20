const { gql } = require('apollo-server');

const schema = gql `
type Recette {
    id: ID!
    name: String
}

type Ingredient {
    id: ID!
    label: String
    recettes: [Recette]
}

type Query {
    
    "Liste des recettes"
    recettes: [Recette]

    "Ingrédients d'une recette"
    ingredients: [Ingredient]

}
`

module.exports=schema;