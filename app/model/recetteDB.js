const client = require('./dbClient');

const dataMapper = {


    /**
     * 
     * @returns {Recette[]} Liste des recettes
     */
    async getAll() {
        const query = {
            text: `select * from recette;`
        }
        const result = await client.query(query);
        return result.rows;
    },

    /**
     * Recettes dans lesquelles il y a un ingrédient spécifique
     * @param {Number} id Id de l'ingrédient
     * @returns {recettes[]} 
     */
    async recetteByIngredientID(id) {
        const query = {
            text: `select name from recette
            join recette_ingredient on recette.id = recette_id
            join ingredient on ingredient.id = ingredient_id 
            where ingredient.id = $1;`,
            values: [id]
        }
        const result = await client.query(query);
        return result.rows;
    }
}

module.exports = dataMapper;