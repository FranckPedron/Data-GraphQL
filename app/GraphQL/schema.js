/**
 * Le fichier de schéma va nous permettre de définir les types qui vont être pris en compte par GraphQL
 *
 */
const { gql } = require("apollo-server");

const schema = gql`

    type Recette{
        id: ID!
        name: String!

        ingredients: [Ingredient]
        image: Image
    }

    type Ingredient{
        id: ID!
        name: String!

        recettes: [Recette]
    }

    type Image{
        url: String!
    }

    type Query{
        recettes: [Recette]
        recette(id: ID!): Recette

        ingredient(name: String!): Ingredient
    }

`;


module.exports = schema;
