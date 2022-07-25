module.exports = {
    Query: {
        recettes(_,__,{dataSources}){
            console.log(dataSources);
            return dataSources.recette.getRecettes();
        },
        recette( _, args,{dataSources}){
            return dataSources.recette.getRecetteById(args.id);
        },
        ingredient(_,args,{dataSources}){
            return dataSources.ingredient.getIngredientByName(args.name);
        }
    },
    Recette: {
        ingredients(parent,_,{dataSources}){
            console.log(parent);
            return dataSources.ingredient.getIngredientsByRecetteId(parent.id);
        },
        image(_,__,{dataSources}){
            return dataSources.image.getImage();
        }
    },
    Ingredient: {
        recettes(parent,_,{dataSources}){
            console.log(parent);
            return dataSources.recette.getRecettesByIngredientName(parent.name);
        }
    }
};
