const client = require("./dbClient");

const dataMapper = {
    async getIngredientsByRecetteId(id){
        const query = {
            text:`SELECT quantite || unite || ' ' || ingredient.name AS name FROM ingredient
            INNER JOIN ingredient_recette ON ingredient_recette.ingredient_id = ingredient.id
            WHERE ingredient_recette.recette_id = $1;`,
            values:[id]
        };
        console.log(query);
        const result =  (await client.query(query)).rows;
        console.log(result);
        return result;
    },
    async getRecetteByIngredientId(id){
        const query = {
            text:`SELECT recette.name FROM recette
            JOIN ingredient_recette ON recette.id = ingredient_recette.recette_id
            WHERE ingredient_id = $1;`,
            values:[id]
        };
        return (await client.query(query)).rows;
    },
    async getRecettes(){
        const query = {
            text:`SELECT * FROM recette;`
        };
        return (await client.query(query)).rows;
    },
    async getRecetteById(id){
        const query = {
            text:`SELECT * FROM recette WHERE id=$1;`,
            values:[id]
        };
        return (await client.query(query)).rows[0];
    },
    async getIngredientByName(name){
        const query = {
            text:`SELECT * FROM ingredient WHERE name=$1;`,
            values:[name]
        };
        return (await client.query(query)).rows[0];
    },
    async getRecettesByIngredientName(name){
        const query = {
            text:`SELECT recette.name FROM recette
            JOIN ingredient_recette ON recette.id = ingredient_recette.recette_id
            JOIN ingredient ON ingredient.id = ingredient_recette.ingredient_id
            WHERE ingredient.name = $1;`,
            values:[name]
        };
        return (await client.query(query)).rows;
    },
};

module.exports = dataMapper;
