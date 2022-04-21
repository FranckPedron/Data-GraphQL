const recetteDB = require('../model/recetteDB');
const ingredientDB = require('../model/ingredientDB')

module.exports = {
    Query: {
        recettes() {
            return recetteDB.getAll();
        },

        recette(_,args) {
            return recetteDB.getById(args.id)
        },

        ingredients() {
            return ingredientDB.getAll();
        }

    },

    Ingredient: {
        recettes(parent) {
            return recetteDB.recetteByIngredientID(parent.id);
        }
    },

    Recette: {
        ingredients(parent) {
            return ingredientDB.getIngredientByRecetteId(parent.id);
        }
    }
};