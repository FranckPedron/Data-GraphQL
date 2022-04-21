const client = require('./dbClient');

const dataMapper = {
    /**
     * 
     * @returns 
     */
    async getAll() {
        const query = {
            text: `select * from ingredient;`
        }
        const result = await client.query(query);
        return result.rows;
    },

    async getIngredientByRecetteId(id) {
        const query = {
            text: `select label from ingredient inner join recette_ingredient on recette_ingredient.ingredient_id = ingredient.id where recette_ingredient.recette_id=$1;`,
            values: [id]
        }
        const result = await client.query(query);
        return result.rows;
    }
}

module.exports = dataMapper;