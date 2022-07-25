const { SQLDataSource } = require('datasource-sql');

const MINUTE = 60;

class Ingredient extends SQLDataSource {
    tableName = "ingredient";

    async getIngredientByName(name){
        console.log(name);
        const toto = await this
            .knex
            .select("*")
            .from(this.tableName)
            .where({
                name
            })
            .cache(MINUTE)

        console.log("toto",toto);
        return toto[0];
    }
}

module.exports = Ingredient;
