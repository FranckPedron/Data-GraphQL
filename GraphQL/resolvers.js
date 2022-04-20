const recetteDB = require('../app/model/recetteDB');
const ingredientDB = require('../app/model/ingredientDB')

module.exports = {
    Query: {
        recettes() {
            return recetteDB.getAll();
        },

        ingredients() {
            return ingredientDB.getAll();
        }

    },

    Ingredient: {
        recettes(parent) {
            return recetteDB.recetteByIngredientID(parent.id);
        }
    }
};