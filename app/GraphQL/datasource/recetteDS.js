const { SQLDataSource } = require('datasource-sql');
const DataLoader = require("dataloader");

const MINUTE = 60;
const HEURE = 3600;

class Recette extends SQLDataSource {
    tableName = "recette";

    getRecettes(){
        return this
            .knex
            .select("*")
            .from(this.tableName)
            .cache(MINUTE); // exprimé en secondes
    }

    // getRecetteById(id){
    //     return this
    //     .knex
    //     .select("*")
    //     .from(this.tableName)
    //     .where({id})
    //     .cache(HEURE);
    // }

    getRecettesByIngredientName(name){
        return this
            .knex
            .select("recette.name")
            .from(this.tableName)
            .join('ingredient_recette', 'recette.id', '=', 'ingredient_recette.recette_id')
            .join('ingredient','ingredient.id','ingredient_recette.ingredient_id')
            .where({
                "ingredient.name":name
            })
            .cache(HEURE);

        // avec une vue ça serait plus simple !

    }

    getRecettesByIds(ids){
        return this
            .knex
            .select("*")
            .from(this.tableName)
            .whereIn("id",ids)
            .cache(HEURE);
    }

    recetteLoader = new DataLoader(async keys => {
        // on retrouve l'ensemble des recettes remontées depuis PG
        // attention l'ordre ici est arbitraire
        const recettes = await this.getRecettesByIds(keys);

        // notre loader doit renvoyer les recettes dans le bon ordre

        // l'ordre attendu est précisé dans "keys"
        // je viens mapper mon tableau d'id (keys)
        // pour chaque id (key), je vais chercher la recette correspondante
        return keys.map(key => recettes.find(recette=>recette.id === key));
    })

    getRecetteById(id){
        return this.recetteLoader.load(id);
    }

    getTwoRecettesById(id1,id2){
        return this.recetteLoader.load([id1,id2]);
    }
}

module.exports = Recette;
